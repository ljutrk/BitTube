import { Video } from '../entities/Video';
import { search_term } from '../shared/constants';

const fetchVideos = (searchInput) => {
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&order=viewCount&q=${search_term}&type=video&key=AIzaSyCKENHL1RGtKJOgXCTOEh7YMpbKT8izY0c`)
        .then(response => response.json())
        .then(videos => videos.items.map(video => new Video(video)))
}

export { fetchVideos };