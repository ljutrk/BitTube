import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class SideVideos extends Component {
    render() {
        // console.log(this.props)
        return (

            <div>
                {this.props.videos.map(video => {
                    return <Link to="/"><img className="sideVideoImg" src={video.thumbnail} /></Link>
                })}
            </div>

        );
    }
}

export { SideVideos };