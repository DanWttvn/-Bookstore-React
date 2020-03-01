import React, {Component} from "react"

class SearchBar extends Component {

	sendSearchTerm = (e) => {
		this.props.searchTermFromChild(e.target.value.toLowerCase());
		// console.log(this.props.searchTermFromChild); = la funcion! luego lo que hago es traer aquí la función y pasar como arg el searchTerm		
	}

	render() {

		return (
			<div>
				<form className="input-group" id="searchBox">
					<div className="gg-search"></div>
					<input type="text" onChange={this.sendSearchTerm}  className="form-control" id="searchInput" placeholder="Search book..."/>
				</form>
			</div>
		)
	}
}

export default SearchBar;