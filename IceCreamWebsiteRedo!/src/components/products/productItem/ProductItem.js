import {Fragment} from 'react';
import styles from './ProductItem.module.css'
import ProductItemForm from './ProductItemForm';
import cart_context from "../../../store/cart_context"
import React, {useContext} from 'react';

function ProductItem(props){

	const context = useContext(cart_context);

	const price = `£${props.price.toFixed(2)}`;

	function addToCartFunction(amount){
		context.addItem(
			{
				id: props.id,
				name: props.name,
				amount: amount,
				price: props.price
			}
		)
	}

	return(
		<Fragment>
			<li className={styles.product}>
				<div >
					<h3 >{props.name}</h3>
					<div className={styles.description}>{props.description}</div>
					<div className={styles.price}>{price}</div>
				</div>

				<div>
					<ProductItemForm addToCartFunction={addToCartFunction}/>
				</div>
			</li>
		</Fragment>
	)
}

export default ProductItem;