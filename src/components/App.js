import React, { Component } from 'react';
import YTSearch from 'youtube-api-search'

import Searchbar from './Searchbar';
import VideoList from './Video_list';
import VideoDetail from './Video_detail';

const API_KEY = 'AIzaSyBC5WI-fFWqgmIuDCbWPJTnknBLafW_NVM';

class App extends Component {
     constructor(props) {
       super(props);
       this.state = {
         videos: [],
         selectedVideo: null
       }

  this.onVideoSearch('surfborads');
}
  onVideoSearch(term) {
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
   });
  }

  render() {
    return (
      <div className="App">
        <div className="row text-center py-5">
          <div className="col-md-3"></div>
          <div className="col-md-6">
             <div className="row">
               <div className="logo d-block"></div>
               <h1 className="logo-header text-center color-white pt-4"><span className="font-weight-bold">YouTube</span> Browser</h1>
               <p></p>
             </div>
          </div>
          <div className="col-md-3"></div>
        </div>
        <div className="container">
          <div className='row px-5 py-4'>
             <div className='col-md-12 pl-0'>
                <Searchbar onFormSubmit = {term => this.onVideoSearch(term)} />
             </div>
          </div>
          <div className='row media-row'>
               <div className="col-md-8">
                 <VideoDetail
                   video={this.state.selectedVideo}
                   />
               </div>
               <div className="col-md-4">
                 <VideoList
                   videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                   />
               </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
