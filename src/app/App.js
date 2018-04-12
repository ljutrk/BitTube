import React, { Component, Fragment } from 'react';
import './App.css';
import { fetchVideos } from '../services/apiService';
import { MainVideo } from './MainVideo';
import { Search } from './Search';
import { SideVideos } from './SideVideos';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
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
        this.setState({ videos })
      })
  }

  searchFetchHandler = (searchInput) => {
    this.fetchMeStuff(searchInput)
  }

  sideVideoFetchHandler = (sideVideoIndex) => {
    this.setState({ sideVideoIndex })
    if (sessionStorage.key("watchedVideos") === null) {
      let storage = [this.state.videos[sideVideoIndex]]
      sessionStorage.setItem("watchedVideos", JSON.stringify(storage));
    } else {
      let storage = JSON.parse(sessionStorage.getItem("watchedVideos"))
      storage.push(this.state.videos[sideVideoIndex])
      sessionStorage.setItem("watchedVideos", JSON.stringify(storage));
    }
  }

  render() {
    if (this.state.videos.length === 0) {
      return <h3>Loading...</h3>
    }

    return (
      <Fragment>
        <div class="container">
          <Search searchFetchHandler={this.searchFetchHandler} />
          <div className="row">
            <MainVideo videos={this.state.videos} sideVideoIndex={this.state.sideVideoIndex} />
            <SideVideos videos={this.state.videos} clickHandler={this.sideVideoFetchHandler} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
