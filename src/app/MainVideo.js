import React, { Component, Fragment } from 'react';
import { PreviousVideo } from './PreviousVideo';

class MainVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            historyCleared: false
        }
    }

    mapPreviousVideos = () => {
        if (sessionStorage.key("watchedVideos") === null) {
            return
        } else {
            return JSON.parse(sessionStorage.getItem("watchedVideos")).reverse().map((video, index) => {
                return <PreviousVideo key={index} video={video} previousVideosFetchHandler={this.props.previousVideosFetchHandler} />
            })
        }
    }

    clearHistory = () => {
        sessionStorage.clear();
        this.setState({ historyCleared: !this.state.historyCleared })
    }


    render() {
        const youTubeSrc = `https://www.youtube.com/embed/${this.props.mainVideo.id}?autoplay=0`;
        return (
            <Fragment>
                <div className="col s8 youTubeFrame">
                    <iframe title="main video" id="ytplayer" type="text/html" width="600" height="340"
                        src={youTubeSrc}
                        frameBorder="0"></iframe>
                    <p id="mainVideoTitle">{this.props.mainVideo.title}</p>
                    <p>{this.props.mainVideo.description}</p>

                    <div className="col s12 m12">
                        <div className="row">
                            <span className="prevVidSpan">Previously viewed videos:</span>
                            <span className="historyClearSpan right" onClick={this.clearHistory}>clear history</span>
                        </div>
                        <div className="row">
                            {this.mapPreviousVideos()}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }

}


export { MainVideo }; 