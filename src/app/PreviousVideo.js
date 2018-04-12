import React from 'react';

const PreviousVideo = ({video}) => {

    return (
            <div class="col s12 m6">
                <div class="previousVideos">
                    <img id={video.id} src={video.thumbnail} />
                    <p>{video.title}</p>
                </div>
            </div>
    );
}

export { PreviousVideo }; 