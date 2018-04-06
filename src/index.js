import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

import  YTSearch from 'youtube-api-search'

const YOUTUBE_API_KEY = 'AIzaSyDdaZ6BM75a3paSLfXbZsYioQheeAgtqnY';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('tanks')
    }

    videoSearch(term) {
        YTSearch({key: YOUTUBE_API_KEY, term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });

    }

    render() {

        const videoSearchDebounced = _.debounce(term => this.videoSearch(term), 300);

        return (
            <div>
                <SearchBar onSearchTermChanged={videoSearchDebounced}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({
                        selectedVideo
                    })}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

// put the component's generated html into the DOM
ReactDOM.render(<App/>, document.querySelector('.container'));
