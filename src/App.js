import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

import './App.css';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const APIKey = 'AIzaSyBNcc44v7QJIagXXiK-hGuegI6tDDLzhik';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: []};

    YTSearch({key: APIKey, term: 'surfboards'}, (videos) => {
      this.setState({videos: videos});
    });  
  }

  
   render() {
    return (
      <div className="App">
        <SearchBar />
        <VideoList />
      </div>
    );
  }
}

export default App;
