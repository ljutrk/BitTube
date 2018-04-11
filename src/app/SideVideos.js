import React, { Component } from 'react';

class SideVideos extends Component {

    clickHandler = (e) => {
        this.props.clickHandler(e.target.id);
    }

    render() {
        return (
            <div>
                {this.props.videos.map(video => {
                    return <img id={video.id} onClick={this.clickHandler} className="sideVideoImg" src={video.thumbnail} alt="" />
                })}
            </div>
        );
    }
}

export { SideVideos }; 