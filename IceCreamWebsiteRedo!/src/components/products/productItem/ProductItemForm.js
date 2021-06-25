import styles from './ProductItemForm.module.css';
import Input from '../../ui/Input';
import React, {useRef, useState} from "react";

function ProductItemForm(props){

	const [amountValid, setAmountValid] = useState(true)

	const amountInputRef = useRef();

	function submitFunction(event) {
		event.preventDefault();

		const enteredAmount = amountInputRef.current.value;

		const enteredAmountNumber = +enteredAmount; // convert string to number

		if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
			setAmountValid(false);
			return;
		}
		props.addToCartFunction(enteredAmountNumber);
	}

	return(
		<form className={styles.form} onSubmit={submitFunction}>
			<Input 
			ref={amountInputRef}
			label="Amount" input={{
				id: 'amount',
				type: 'numer',
				min: '1',
				max: '5',
				step: '1',
				defaultValue: '1'
			}} />
			<button>+</button>
			{!amountValid ? <p>Please enter a valid amount (1-5)</p> : ''}
		</form>
	)
}

export default ProductItemForm;