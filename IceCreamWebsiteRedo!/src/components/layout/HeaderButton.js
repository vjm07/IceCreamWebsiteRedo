import CartIcon from "../cart/CartIcon";
import styles from "./HeaderButton.module.css";
import CartContext from "../../store/cart_context";
import {useContext, useEffect} from "react";
import React, {useState} from "react";

function HeaderButton(props) {
	const [buttonHighlight, setButtonHighlight] = useState(false)

	const context = useContext(CartContext)

	const numberOfItems = context.items.reduce(
		(currentNumber, item) => {
			return currentNumber + item.amount;
		}, 0);

	const btnClasses = `${styles.btn} ${buttonHighlight ? styles.bump : ''}`;

	const {items} = context;
	useEffect(() => {

		if (items.length === 0) {
			return;
		}
		
		setButtonHighlight(true);

		const timer = setTimeout(() => {setButtonHighlight(false)}, 300); // remove class so it can be added again >:)

		return () =>{ clearTimeout(timer) }; // clear timer to remove bug - still dont get why tbh

	}, [items])


	return(
		<button className={btnClasses} onClick={props.showCart}>
			<span className={styles.icon}>
				<CartIcon/>
			</span>

			<span>
				Cart
			</span>

			<span className={styles.badge}>
				{numberOfItems}
			</span>
		</button>
	)
}

export default HeaderButton;