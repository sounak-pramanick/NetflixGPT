export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const NETFLIX_BG = "https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" ;


// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzJmMTM1NmQyMDczYmNkNDJjMDYxZjIxMWU4MGExZiIsInN1YiI6IjYzOWFmMTYzMGYwZGE1MDA3ZDg5Njk0OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RCeIoeGB5TDYSTP5BnksLpAHeMilpAepNqv-1B8JhbI
const apiKey = process.env.REACT_APP_API_KEY;
export const API_OPTIONS = {
    method: 'GET', 
    headers: {
        accept: 'application/json', 
        Authorization: `Bearer ${apiKey}`
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w780";


export const SUPPORTED_LANGUAGES = [
    {identifier: "en", name: "English"}, 
    {identifier: "hindi", name: "Hindi"}, 
    {identifier: "bengali", name: "Bengali"}, 
    {identifier: "spanish", name: "Spanish"}
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;