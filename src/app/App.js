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
