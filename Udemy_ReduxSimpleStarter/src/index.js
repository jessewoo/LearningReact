import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = ''

class App extends Component {
	constructor(props) {
		super(props);

		// Starts at zero
		this.state = { videos: [] };

		// Kick off a network request, arbitrary amount of time to get data from the network. In between time it take, rendered videos. 0 => 5 videos
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			this.setState({ videos });
			//  this.setState({videos: videos});
		});
	}

// Pass data to child component (VideoList) from parent (App
// Passing props "videos" from YTSearch to VideoList
	render() {
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos}/>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));
