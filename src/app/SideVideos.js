import React, { Component } from 'react';

class SideVideos extends Component {

    clickHandler = (e) => {
        this.props.clickHandler(e.target.id);

    }

    render() {
        return (
            <div className="col m4 suggestedVideos">
                {this.props.videos.map((video, index) => {
                    return <div key={index} className="row">
                        <div className="col m12">
                            <div className="suggestedVideoCard">
                                <img id={index} alt="" onClick={this.clickHandler} className="sideVideoImg" src={video.thumbnail} />
                                <div className="videoName">
                                    <p>{video.title}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                })}
            </div>
        );
    }
}

export { SideVideos }; 