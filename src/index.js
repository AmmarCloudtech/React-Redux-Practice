import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCbWzJPr1dgOTw_FDmSXYt_fah5lMzDeBA';


class App extends Component  {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null
		};
		this.videoSearch('surfboards');
}
	videoSearch(term) {
		//ES6 says if in a key value pair key and value is exactly same string we can write only one instead of a pair e.g. videos:videos can be replaced with videos.
		YTSearch({key: API_KEY, term: term}, (videos) => {
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});
		});
	}
	render() {
		const videoSearch = _.debounce((term) => {this.videoSearch(term) }, 300);
		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch}/>
				<VideoDetail video={ this.state.selectedVideo }/>
				<VideoList
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={ this.state.videos }/>
			</div>																			// { this.state.videos } PROPS PASSING,,,, PASSING DATA FROM PARENT TO CHILD. PARENT IS APP COMPONENT
			 																						// WHOSE STATE HAS RECORD OF VIDEOS. AND IT IS BEING PASSED TO DIFFERENT CHILDREN AS DIFFERENT PROPERTIES
																									// E.G. VIDEO AND VIDEOS.
		);
	}
}

	//Take this component's generated HTML and put it on the page (in the DOM)
	ReactDOM.render(<App />, document.querySelector('.container'));
