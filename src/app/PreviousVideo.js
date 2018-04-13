import React from 'react';

const PreviousVideo = ({ video, previousVideosFetchHandler }) => {

    const clickHandler = (e) => {
        previousVideosFetchHandler(e.target.id)
    }

    return (
        <div className="col s12 m6">
            <div className="previousVideos">
                <img onClick={clickHandler} id={video.title} src={video.thumbnail} alt="" />
                <p>{video.title}</p>
            </div>
        </div>
    );
}

export { PreviousVideo }; 