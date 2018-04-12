import React, { Component, Fragment } from 'react';
import { PreviousVideo } from './PreviousVideo';

class MainVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyCleared: false
        }
    }

    isSideVideo = () => {
        if (this.props.sideVideoIndex !== "") {
            return this.props.sideVideoIndex
        }
        return 0
    }

    autoplay = () => {
        if (this.props.sideVideoIndex !== "") {
            return 1
        }
        return 0
    }

    mapPreviousVideos = () => {
        if (sessionStorage.key("watchedVideos") === null) {
            return
        } else {
            return JSON.parse(sessionStorage.getItem("watchedVideos")).reverse().map(video => {
                return <PreviousVideo video={video} />
            })
        }
    }

    clearHistory = () => {
        sessionStorage.clear();
        this.setState({ historyCleared: !this.state.historyCleared })
    }


    render() {
        const youTubeSrc = `https://www.youtube.com/embed/${this.props.videos[this.isSideVideo()].id}?autoplay=${this.autoplay()}`;
        return (
            <Fragment>
                <div className="col s8 youTubeFrame">
                    <iframe title="main video" id="ytplayer" type="text/html" width="600" height="340"
                        src={youTubeSrc}
                        frameBorder="0"></iframe>
                    <p id="mainVideoTitle">{this.props.videos[this.isSideVideo()].title}</p>
                    <p>{this.props.videos[this.isSideVideo()].description}</p>

                    <div class="col s12 m12">
                        <div class="row">
                            <span class="prevVidSpan">Previously viewed videos:</span>
                            <span class="historyClearSpan right" onClick={this.clearHistory}>clear history</span>
                        </div>
                        <div class="row">
                            {this.mapPreviousVideos()}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}


export { MainVideo }; 