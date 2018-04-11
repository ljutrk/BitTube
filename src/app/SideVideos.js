import React, { Component } from 'react';

class SideVideos extends Component {

    clickHandler = (e) => {
        this.props.clickHandler(e.target.id);
    }

    render() {
        return (
            <div class="col m4 suggestedVideos">
                {this.props.videos.map((video, index) => {
                    return <div class="row">
                        <div class="col m12">
                            <div class="suggestedVideoCard">
                                <img id={index} onClick={this.clickHandler} className="sideVideoImg" src={video.thumbnail} alt="" />
                                <div class="videoName">
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