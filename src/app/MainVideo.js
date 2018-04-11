import React from 'react';

const MainVideo = (props) => {

    const isSideVideo = () => {
        if (props.sideVideoIndex !== "") {
            return props.sideVideoIndex
        }
        return 0
    }

    const autoplay = () => {
        if (props.sideVideoIndex !== "") {
            return 1
        }
        return 0
    }

    const youTubeSrc = `https://www.youtube.com/embed/${props.videos[isSideVideo()].id}?autoplay=${autoplay()}`;

    return (
        <div className="col s8 youTubeFrame">
            <iframe title="main video" id="ytplayer" type="text/html" width="600" height="340"
                src={youTubeSrc}
                frameBorder="0"></iframe>
            <p id="mainVideoTitle">{props.videos[isSideVideo()].title}</p>
            <p>{props.videos[isSideVideo()].description}</p>
        </div>
    );
}



export { MainVideo }; 