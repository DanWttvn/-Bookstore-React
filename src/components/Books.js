import React from 'react'

const Books = ({booksFromParent}) => {
	const booksGallery = booksFromParent.map((book, i) => {
		return (
			<div className="bookCard" key={i}>
				<div className="cardFaces">
					<div className="cardFront" style={
						{backgroundImage: 'url(\'' + book.cover + '\')', 
						backgroundPosition: 'center center', 
						backgroundSize: 'cover'}}></div>
					<div className="cardBack">
						<p className="title">{book.title}</p>
						<p className="description">{book.description}</p>
						<a href={book.detail} className="moreButton">More info</a>
					</div>
				</div>
			</div>
		)
	})

	return (
		<div className="galleryBox">
			{booksGallery}
		</div>
	)
}



export default Books;