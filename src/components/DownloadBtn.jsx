import React from 'react';

const DownloadBtn = ({ videosData }) => {

    const handleQualityChange = async (e) => {
        window.open(e.target.value)
    };

    return (
        <>
            <select
                onChange={handleQualityChange}
                className='cursor-pointer p-1.5 px-3 bg-stone-200 hover:bg-stone-300/80 dark:bg-[#272727] dark:hover:bg-zinc-700/70 outline-none rounded'
            >
                <option className='bg-stone-200/80 hover:bg-stone-300/80 dark:bg-[#272727] dark:hover:bg-zinc-700/70'
                >
                    Download
                </option>
                {videosData?.map((video, index) => (
                    <option
                        key={index}
                        value={video.url}
                        className='bg-stone-200/80 hover:bg-stone-300/80 dark:bg-[#272727] dark:hover:bg-zinc-700/70'
                    >
                        {video.qualityLabel || "Audio"}
                    </option>
                ))}
            </select>
        </>
    );
};

export default DownloadBtn;