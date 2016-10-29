import _ from 'lodash'
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = ''

// Converted into Class Component
// Top Level Component - concept of STATE
class App extends Component {
	constructor(props) {
		super(props);

		// Localized State, component level
		this.state = {
			videos: [] ,
			selectedVideo: null
		};

		this.videoSearch('surfboards');

	}

	// Function Video Search
	// Refactor search to a function, takes in a single string
	videoSearch(term) {
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			 });
		});
	}

	render() {
		// Created a function, passed it to debounce. Debounce takes inner function, returns a new function only called every 300ms. Trottle user search
		const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

		// CALLBACK
		return (
			// When there is a Search Bar change, it will take term and do YouTube Search
			// Take that search, passed it into SearchBar, into the property onSearchTermChange
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={this.state.selectedVideo}/>
				<VideoList
				// Takes a video and updates the video, pass this as a property into VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo})}
					videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
