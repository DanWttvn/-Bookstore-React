import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Books from "./components/Books"

class App extends Component {
	state = {
		booksData: [],
		filteredData: []
	}

	componentDidMount() {
		fetch('https://api.myjson.com/bins/zyv02')
			.then(res => res.json())
			.then(data => {
				console.log(data);
				this.setState({	booksData: data.books, filteredData: data.books })
			})
	}

	searchBookFunction = (searchTermChild) => {
		// console.log(this.state.searchTermChild);
		// console.log(this.state.booksData)
		let filteredArray = [...this.state.booksData].filter(book => book.title.toLowerCase().indexOf(searchTermChild) !== -1);
		// console.log(filteredArray);		

		this.setState({
			filteredData: filteredArray
		})
	}

	render() {
		// console.log("en app en render:", this.state.booksDatafromChild);
		
		return (
			<div className="App">
				<Header/>
				<SearchBar searchTermFromChild={this.searchBookFunction}/>
				<Books booksFromParent={this.state.filteredData}/>
			</div>
		)
	}
}

export default App;
