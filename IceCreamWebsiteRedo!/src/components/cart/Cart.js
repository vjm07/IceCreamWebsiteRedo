import Modal from '../ui/Modal';
import styles from './Cart.module.css'
import CartContext from '../../store/cart_context';
import React, {useContext} from 'react';
import CartItem from './CartItem';

function Cart(props){

	const context = useContext(CartContext)

	const totalAmount = `£${context.totalAmount.toFixed(2)}`
	const hasItems = context.items.length > 0;

	function cartItemRemove(id){
		context.removeItem(id);
	}
	function cartAddItem(item){
		context.addItem({...item, amount: 1})
	}

	const cartItems = (
		<ul className={styles['cart-items']}>
			{
				context.items.map( 
					function(item) {
						return (
							<CartItem 
							key={item.id}
							name={item.name}
							amount={item.amount}
							price={item.price}
							onRemove={cartItemRemove.bind(null, item.id)}
							onAdd={cartAddItem.bind(null, item)}>
							{item.name}
							</CartItem>
						
						)
					}
				)
			}
		</ul>
	);


	return(
		<Modal hideCart={props.hideCart}>
		{cartItems}
			<div className={styles.total}>
				<span>Total</span>
				<span>{totalAmount}</span>
			</div>
			<div className={styles.actions}>
				<button className={styles.buttonAlt} onClick={props.hideCart} >Close</button>
				{hasItems ? <button className={styles.button}>Order</button> : ''}
			</div>
		</Modal>
	)
}

export default Cart;