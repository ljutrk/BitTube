// const myFetchGet = (url) => {

//     let requestOptions = {
//         method: 'GET',
//         headers: {

//         }
//     }

//     return fetch(url, requestOptions)
//         .then(response => response.json())
// }

const fetchVideos = () => {
    return fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&q=save+tonight&type=video&key=AIzaSyCKENHL1RGtKJOgXCTOEh7YMpbKT8izY0c")
        .then(response => response.json())
}

export { fetchVideos };