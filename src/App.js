import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const APIKey = '';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: APIKey, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      console.log(videos);
    });  
  }


   render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoDetail />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
