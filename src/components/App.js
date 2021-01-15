import React from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import GifContainer from './GifContainer';

import axios from 'axios';

class App extends React.Component {
	constructor() {
		super();

		this.state = {
			gif: [],
			rand: '',
			apiKey: '0QegizgIHwqHH4870fIotwRSzqYpbmLw'
		};
	}

	//API Key: 0QegizgIHwqHH4870fIotwRSzqYpbmLw
	componentDidMount() {
		this.getGifData();
	}

	getGifData = (name, id) => {
		switch (id) {
			case 0:
				this.search(name);
				break;
			case 1:
				this.rand();
				break;
			case 2:
				this.search(name);
				break;
			default:
				this.trending();
		}
	};

	search = (search) => {
		axios
			.get(
				`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=${this.state.apiKey}`
			)
			.then(
				(res) => this.setState({ gif: res.data.data, rand: '' }),
				console.log('search')
			)
			.catch((err) => {
				console.log('Error!');
			});
	};

	trending = () => {
		axios
			.get(`http://api.giphy.com/v1/gifs/trending?api_key=${this.state.apiKey}`)
			.then(
				(res) => this.setState({ gif: res.data.data, rand: '' }),
				console.log('trending')
			)
			.catch((err) => {
				console.log('Error!');
			});
	};

	random = () => {
		axios
			.get(`http://api.giphy.com/v1/gifs/random?api_key=${this.state.apiKey}`)
			.then(
				(res) =>
					this.setState({ gif: [], rand: res.data.data.images.original.url }),
				console.log('random')
			)
			.catch((err) => {
				console.log('Error!');
			});
	};

	render() {
		return (
			<div className="App">
				<div className="container">
					<img
						src="https://media1.giphy.com/media/3o6gbbuLW76jkt8vIc/giphy.gif"
						alt="logo"
						className="logo-image"
						onClick={() => this.trending()}
					/>
					<SearchBar getGifData={this.getGifData} />
					<div className="btn, gradient-border" onClick={() => this.random()}>
						Random
					</div>
				</div>
				<GifContainer gif={this.state.gif} rand={this.state.rand} />
			</div>
		);
	}
}

export default App;
