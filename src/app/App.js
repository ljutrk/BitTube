import React, { Component, Fragment } from 'react';
import './App.css';
import { fetchVideos } from '../services/apiService';
import { MainVideo } from './MainVideo';
import { SideVideos } from './SideVideos';
import { Search } from './Search';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      searchFilter: "",
      defaultSearch:"javaScript"
    }
  }

  componentDidMount() {

    this.fetchMeStuff(this.state.searchFilter.length === 0 ? this.state.defaultSearch : this.state.searchFilter)

  }

  fetchMeStuff = (searchQuery) => {
    fetchVideos(searchQuery)
      .then(videos => {
        this.setState({ videos })
      })
  }

  searchFetchHandler = (searchInput) => {
    this.setState({ searchFilter: searchInput })
    this.fetchMeStuff(this.state.searchFilter.length === 0 ? this.state.defaultSearch : this.state.searchFilter)
  }

  render() {
    console.log(this.state);

    return (
      <Fragment>

        <Search searchFetchHandler={this.searchFetchHandler} />
        <div className="row">
          <div className="col s6">
            <MainVideo video={this.state.videos[0]} />
          </div>

          <div className="col s6">
            <SideVideos videos={this.state.videos} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
