import React, { Component } from 'react'

const MainVideo = (props) => {
console.log(props.video.id);

        // if(props.length !== 0) {
            // const videoId = `https://www.youtube.com/embed/${props.video.id}?autoplay=0`
            return (
                <div className="container">
                <div className="col s8">
                    <iframe title="main video" id="ytplayer" type="text/html" width="640" height="360"
                        // src={videoId}
                        frameBorder="0"></iframe>
                </div>
            </div>
        );
    // }      
    }



export { MainVideo }; 