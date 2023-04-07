
const BASE_URL = 'https://api.consumet.org/anime/gogoanime'
const apiGet = async (queryString) => {
    const response = await fetch(`${BASE_URL}${queryString}`);
    const body = await response.json()

    return body;
}
 
export const searchForAnime = (query) => apiGet(`/${query}?/page=1`)
export const searchForTopAiring = (query) => apiGet(query)
//single api data
export const getAnimeById = (animeId) => apiGet(`/info/${animeId}`)
