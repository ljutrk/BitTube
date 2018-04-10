import React, { Component, Fragment } from 'react';
import videoSearch from 'youtube-api-search';
import './App.css';
import { search_term } from './shared/constants'
import { fetchVideos } from './services/apiService';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
  }

  // videoSearch(search_term) {
  //   const options = {
  //     term: search_term,
  //     key: "AIzaSyCKENHL1RGtKJOgXCTOEh7YMpbKT8izY0c"
  //   };
  //   YTSearch(options, videos => {
  //     console.log(videos)
  //   })
  // }

  componentDidMount() {
    fetchVideos()
      .then(res => {
        this.setState({videos: res.items})
      })
  }

  render() {
    console.log(this.state);
    
    return (
      <Fragment>

        <h1> Hello Bit Tube! </h1>
        <div class="row">
          <div class="container">
            <div class="col s8">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">Card Title</span>
                  <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
                </div>
                <div class="card-action">
                  <a href="#">This is a link</a>
                  <a href="#">This is a link</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default App;
