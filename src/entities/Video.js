class Video {
    constructor(videoObj) {
        this.id = videoObj.id.videoId;
        this.title = videoObj.snippet.title;
        this.channel = videoObj.snippet.channelId;
        this.description = videoObj.snippet.description;
        this.publishedAt = videoObj.snippet.publishedAt;
        this.thumbnail = videoObj.snippet.thumbnails.high.url;
    }
}

export { Video };