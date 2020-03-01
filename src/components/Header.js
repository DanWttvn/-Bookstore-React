import React from "react"
import backgroundImage from "./img/books-img.jpg"

const Header = () => {
	return (
		<div className="header">
			<h1>UBIQUM BOOKSTORE</h1>
			<div className="mascara"></div>
			<img src={backgroundImage} alt="libros"/>
		</div>

	)
}

export default Header