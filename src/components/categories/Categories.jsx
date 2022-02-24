import React from 'react';
import './Categories.css';
import { Link } from 'react-router-dom';

function Categories() {
	const category = [
		{
			title: 'Informática',
			image: './resources/vectors/informática icon',
		},
		{
			title: 'Videojuegos',
			image: './resources/vectors/videojuegos icon',
		},
		{
			title: 'Música',
			image: './resources/vectors/música icon',
		},
		{
			title: 'Moda Vintage',
			image: './resources/vectors/moda vintage icon',
		},

		{
			title: 'Vídeo',
			image: './resources/vectors/video icon',
		},
		{
			title: 'Otros',
			image: './resources/vectors/otros icon',
		},
	];

	const categorylist = category.map((cat, index) => (
		<li key={index}>
			<Link
				to={`/products?search=${cat.title}
          `}>
				<img className="categories-img" src={cat.image} alt="categories"></img>
				<h4>{cat.title}</h4>
			</Link>
		</li>
	));

	return (
		<section className="categories">
			<h3 className="categories-title">CATEGORÍAS</h3>

			<ul className="categories-list">{categorylist}</ul>
		</section>
	);
}

export default Categories;
