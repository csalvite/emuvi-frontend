import { ButtonNewOffer } from '../offers/ButtonNewOffer';
import './CardProduct.css';
import { Link } from 'react-router-dom';
import { usePrivateUser } from '../../hooks/usePrivateUser';
import { ButtonFavProduct } from './ButtonAddFavProducts';
import { DeleteProduct } from '../myProducts/DeleteProduct';
const { REACT_APP_LOCALHOST } = process.env;

export default function CardProduct(props, product) {

	const {privateUser} = usePrivateUser();

	return (
		<>
			<div className="cardproduct">
				<div className="card__body">

					<Link to={`/products/${props.product.id}`} style={{textDecoration: 'none', color: 'black'}}>
						<img
							className="card__img"
							src={
								props.product.photos.length > 0
									? `${REACT_APP_LOCALHOST}/avatar/${props.product.photos[0].name}`
									: '/resources/images/product-photo-not-found.jpg'
							}
							alt="list_product"
						/>

						<h4 className="card__title">{props.product.name}</h4>
						<h4 className="card__price">{props.product.price} €</h4>
					</Link>
					<div className="card-icon-box">
						{
							props.myProduct ? (
								<>
								<i className="fa-solid fa-pen-to-square edit-product-icon" 
                                    onClick={() => props.setShowPopUp(true)}
                                    title='Editar Producto'
                                    ></i>
								<DeleteProduct 
									idUser={privateUser.id} 
									idProduct={props.product.id} 
									products={props.products}
									setProducts={props.setProducts} 
								/>
								</>
							) : (
								<>
								<ButtonNewOffer idUser={privateUser.id} idProduct={props.product.id} />
								<ButtonFavProduct 
									idProduct={props.product.id} 
									deleteFav={props.deleteFav} 
									idUser={privateUser.id} 
									favProducts={props.favProducts} 
									setFavProducts={props.setFavProducts} 
								/>
								</>
							)
						}
					</div>
				</div>
				{/*<ButtonNewOffer
					idProduct={props.product.id}
					idUser={props.product.idUser}
				/>*/}
			</div>
		</>
	);
}
