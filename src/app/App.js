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
      sideVideoId: ""
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

  sideVideoFetchHandler = (sideVideoId) => {
    this.setState({ sideVideoId })
  }

  render() {
    if (this.state.videos.length === 0) {
      return <h3>Loading...</h3>
    }

    return (
      <Fragment>
        <Search searchFetchHandler={this.searchFetchHandler} />
        <div className="row">
          <div className="col s6">
            <MainVideo video={this.state.videos[0]} sideVideoId={this.state.sideVideoId} />
          </div>
          <div className="col s6">
            <SideVideos videos={this.state.videos} clickHandler={this.sideVideoFetchHandler} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
