import React, { Component, Fragment } from 'react';
import './App.css';
import { fetchVideos } from '../services/apiService';
import { MainVideo } from './MainVideo';
import { Search } from './Search';
import { SideVideos } from './SideVideos';
import  debounce  from 'lodash/debounce';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      mainVideo: "",
      defaultSearch: "javaScript",
      sideVideoIndex: ""
    }
  }

  componentDidMount() {
    this.fetchMeStuff(this.state.defaultSearch)
  }

  fetchMeStuff = (searchInput) => {
    fetchVideos(searchInput)
      .then(videos => {
        this.setState({ videos, mainVideo: videos[0] })
      })
  }

  searchFetchHandler = debounce((searchInput) => {
    this.fetchMeStuff(searchInput)
  },1000)

  previousVideosFetchHandler = (videoTitle) => {
    fetchVideos(videoTitle)
      .then(video => {
        this.setState({ mainVideo: video[0] })
      })
  }

  sideVideoFetchHandler = (sideVideoIndex) => {
    this.setState({ mainVideo: this.state.videos[sideVideoIndex] })
    if (sessionStorage.key("watchedVideos") === null) {
      let storage = [this.state.videos[sideVideoIndex]]
      sessionStorage.setItem("watchedVideos", JSON.stringify(storage));
    } else {
      let storage = JSON.parse(sessionStorage.getItem("watchedVideos"))
      storage.push(this.state.videos[sideVideoIndex])
      sessionStorage.setItem("watchedVideos", JSON.stringify(storage));
    }
  }

  componentDidUpdate() {
    window.scrollTo(0,0);
  }

  render() {
    if (this.state.videos.length === 0) {
      return <h3>Loading...</h3>
    }

    return (
      <Fragment>
        <div className="container">
          <Search searchFetchHandler={this.searchFetchHandler} />
          <div className="row">
            <MainVideo mainVideo={this.state.mainVideo} previousVideosFetchHandler={this.previousVideosFetchHandler} />
            <SideVideos videos={this.state.videos} clickHandler={this.sideVideoFetchHandler} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
