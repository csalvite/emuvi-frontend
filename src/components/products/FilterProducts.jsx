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
				<label className="accordion-label" for="accordion1">
					<h3 className="filter-title">
						FILTRAR PRODUCTOS
						<i className="fa-solid fa-sort filter-icon"></i>
					</h3>
				</label>
				<input type="checkbox" id="accordion1"></input>
				<div className="accordion-inputs-container">
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
								Filtrar por
							</option>
							<option value="price">Precio</option>

							<option value="createdAt">fecha</option>
							<option value="name">Orden alfabetico</option>
							<option value="rating">Valoraciones</option>
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
								Ordenar
							</option>
							<option value="ASC">Ascendente</option>
							<option value="DESC">Descendente</option>
						</select>
					</div>

					<div className="filters-ratings-container">
						<p className="filters-subtitle">Valoraciones del vendedor</p>
						<Rating
							name="rating"
							value={rating}
							onChange={(event, newValue) => {
								setRating(newValue);
							}}
						/>
					</div>

					<div>
						{minPrice <= 1 && maxPrice >= 10000 ? (
							<p className="filters-subtitle">Rango de precios</p>
						) : (
							<p>{`${minPrice}€ - ${maxPrice}€`}</p>
						)}
						<Slider
							sx={{ width: '15rem' }}
							color="primary"
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

					<div className="filters-categories-container">
						<form>
							<p className="filters-subtitle">Categoría</p>
							<input
								className="filters-radio-input"
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
							<label className="radio-label" for="informatica">
								Infórmatica
							</label>
							<input
								className="filters-radio-input"
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
							<label className="radio-label" for="musica">
								Música
							</label>
							<input
								className="filters-radio-input"
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
							<label className="radio-label" for="videojuegos">
								Videojuegos
							</label>
							<input
								className="filters-radio-input"
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
							<label className="radio-label" for="video">
								Video
							</label>
							<input
								className="filters-radio-input"
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
							<label className="radio-label" for="modavintage">
								Moda Vintage
							</label>
							<input
								className="filters-radio-input"
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
							<label className="radio-label" for="otros">
								Otros
							</label>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

export default FilterProducts;
