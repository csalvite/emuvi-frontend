import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Slider from '@mui/material/Slider';
import Rating from '@mui/material/Rating';
import './FilterProducts.css';

function FilterProducts() {
	const [params, setParams] = useSearchParams('');
	const [search, setSearch] = useState(
		params.has('search') ? params.get('search') : '',
	);

	const [direction, setDirection] = useState(
		params.has('direction') ? params.get('direction') : '',
	);
	const [order, setOrder] = useState(
		params.has('order') ? params.get('order') : '',
	);
	const [rating, setRating] = useState('rating');
	if (rating) {
		params.get('rating');
	} else {
		params.get('');
	}

	const [minPrice, setMinPrice] = useState(1);

	if (minPrice) {
		params.get('minPrice');
	} else {
		params.get('');
	}

	const [maxPrice, setMaxPrice] = useState(10000);
	if (maxPrice) {
		params.get('maxPrice');
	} else {
		params.get('');
	}

	useEffect(() => {
		setParams({
			search,
			order,
			direction,
			rating,
			minPrice,
			maxPrice,
		});
	}, [direction, params, setParams, order, search, rating, minPrice, maxPrice]);
	console.log(minPrice);

	return (
		<>
			<div className="accordion">
				<h3>Filtrar productos</h3>
			</div>

			<div className="container_input">
				<label htmlFor="form_product_category"></label>
				<select
					value={order}
					onChange={(e) => {
						setOrder(e.target.value);
					}}
					className="select_product_category"
					name="form_product_category">
					<option hidden selected>
						Filtros:
					</option>
					<option value="price">Por precio</option>

					<option value="createdAt">Por fecha</option>
					<option value="name">Por orden alfabetico</option>
					<option value="rating">Por valoraciones</option>
				</select>
			</div>
			<div className="container_input">
				<label htmlFor="form_product_category"></label>
				<select
					value={direction}
					onChange={(e) => {
						setDirection(e.target.value);
					}}
					className="select_product_category"
					name="form_product_category">
					<option hidden selected>
						Ordenar Por:
					</option>
					<option value="ASC">Ascendente</option>
					<option value="DESC">Descendente</option>
				</select>
			</div>
			<div>
				<form>
					<input
						type="radio"
						value="informatica"
						id="informatica"
						checked={search === 'informatica'}
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
						}}
						name="informatica"
					/>
					<label for="informatica">Infórmatica</label>
					<input
						type="radio"
						value="musica"
						id="musica"
						checked={search === 'musica'}
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
						}}
						name="musica"
					/>
					<label for="musica">Música</label>
					<input
						type="radio"
						value="videojuegos"
						checked={search === 'videojuegos'}
						id="videojuegos"
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
						}}
						name="videojuegos"
					/>
					<label for="videojuegos">Videojuegos</label>
					<input
						type="radio"
						value="video"
						checked={search === 'video'}
						id="video"
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
						}}
						name="video"
					/>
					<label for="video">Video</label>
					<input
						type="radio"
						value="modavintage"
						checked={search === 'modavintage'}
						id="modavintage"
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
						}}
						name="modavintage"
					/>
					<label for="modavintage">Moda Vintage</label>
					<input
						type="radio"
						value="otros"
						checked={search === 'otros'}
						id="otros"
						onChange={(e) => {
							e.preventDefault();
							setSearch(e.target.value);
						}}
						name="otros"
					/>
					<label for="otros">Otros</label>
				</form>
			</div>
			<div>
				{minPrice <= 1 && maxPrice >= 10000 ? (
					<p>Filtrar por precio</p>
				) : (
					<p>{`${minPrice}€ - ${maxPrice}€`}</p>
				)}
				<Slider
					sx={{ width: '12.5rem' }}
					color="secondary"
					min={1}
					max={10000}
					step={50}
					value={minPrice}
					onChange={(e) => {
						setMinPrice(e.target.value);
					}}
					valueLabelDisplay="auto"
				/>
			</div>

			<div>
				<Rating
					name="rating"
					value={rating}
					onChange={(event, newValue) => {
						setRating(newValue);
					}}
				/>
			</div>
		</>
	);
}

export default FilterProducts;
