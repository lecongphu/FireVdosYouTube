import axios from 'axios';

const base_url = 'https://yt-api.p.rapidapi.com';
const base_url_tiktok = 'https://tik-tok-feed.p.rapidapi.com';

const options = {
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
    }
};

const optionsTiktok = {
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY_TIKTOK,
        'X-RapidAPI-Host': 'tik-tok-feed.p.rapidapi.com'
    }
};


export const fetchFromAPI = async (url) => {
    try {
        
        const { data } = await axios.get(base_url + '/' + url, options);
        console.log("API call for ...", url)

        return data;

    } catch (error) {
        console.error(error);
    }
}

export const fetchFromAPITikTok = async (url) => {
    try {
        
        const { data } = await axios.get(base_url_tiktok + '/' + url, optionsTiktok);
        console.log("API call for ...", url)

        return data;

    } catch (error) {
        console.error(error);
    }
}