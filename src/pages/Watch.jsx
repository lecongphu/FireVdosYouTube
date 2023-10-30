import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import VideoArea from '../components/VideoArea';
import RelatedVdos from '../components/RelatedVdos';
import { CountryCodeContext } from '../context/countryCodeContext';
import { fetchFromAPI } from '../fetchAPI';
import { useQuery } from 'react-query';

const Watch = () => {
    const { videoID } = useParams();
    const countryCode = useContext(CountryCodeContext);

    const getDataFromApi = async () => {
        const apiData = await fetchFromAPI(`related?id=${videoID}&geo=${countryCode}`);
        const { adaptiveFormats } = await fetchFromAPI(`dl?id=${videoID}`);
        const videosData = [];
        const audioData = adaptiveFormats.filter((elem) => elem.mimeType.includes("audio")).sort((a, b) => -a.bitrate + b.bitrate)[0];
        const videoFormats = adaptiveFormats.filter((elem) => elem.mimeType.includes(`mp4; codecs="avc`) && elem.height >= 360).sort((a, b) => -a.bitrate + b.bitrate);
        videosData.push(...videoFormats);
        videosData.push(audioData);
        return {
            relatedData: apiData,
            audioData: audioData,
            videosData: videosData,
        };
    };

    const { isLoading, data } = useQuery(videoID, getDataFromApi, { cacheTime: 1800000, staleTime: 1800000 });

    return (
        <>
            <div className="lg:flex w-full max-w-full max-h-full overflow-auto scrollbar-hide md:scrollbar-default">
                <VideoArea loading={isLoading} videoData={data?.relatedData?.meta} nextVideoID={data?.relatedData?.data[0]?.videoId} audioData={data?.audioData} videosData={data?.videosData}/>
                <RelatedVdos loading={isLoading} relatedVdos={data?.relatedData?.data} />
            </div>
        </>
    );
};

export default Watch;
