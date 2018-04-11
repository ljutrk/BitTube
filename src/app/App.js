import React, { Component, Fragment } from 'react';
import './App.css';
import { fetchVideos } from '../services/apiService';
import { MainVideo } from './MainVideo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  componentDidMount() {

    this.fetchMeStuff()

  }

  fetchMeStuff = () => {
    fetchVideos()
      .then(videos => {
        this.setState({ videos })
      })
  }

  render() {
    if (this.state.videos.length === 0) {
      return <h3>Loading...</h3>
    }

    return (
      <Fragment>
        <div className="col s6">
          <MainVideo video={this.state.videos[0]} />
        </div>
      </Fragment>
    );
  }
}

export default App;
