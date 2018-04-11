import React from 'react';

const MainVideo = (props) => {

    let youTubeSrc = `https://www.youtube.com/embed/${props.sideVideoId}?autoplay=1`;

    if (props.sideVideoId === "") {
        youTubeSrc = `https://www.youtube.com/embed/${props.video.id}?autoplay=0`;
    }

    return (
        <div className="container">
            <div className="col s8">
                <iframe title="main video" id="ytplayer" type="text/html" width="640" height="360"
                    src={youTubeSrc}
                    frameBorder="0"></iframe>
            </div>
        </div>
    );
}



export { MainVideo }; 