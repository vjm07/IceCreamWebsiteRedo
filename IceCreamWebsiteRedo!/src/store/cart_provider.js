import CartContext from "./cart_context"
import {useReducer} from "react"

const defaultCartState = {
	items: [],
	totalAmount: 0,
}

function reducer(state, action) {

		let updatedItem;
		let updatedItems;
		let updatedTotal;

	if(action.type ==='ADD_ITEM'){
		updatedTotal = state.totalAmount + action.item.price * action.item.amount;

		// check if item already in the cart - so it wont show a flavour 3 times!
		const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
		const existingCartItem = state.items[existingItemIndex]; // returns null if it isnt there!

		if(existingCartItem){

			updatedItem = {
				...existingCartItem,
				amount: existingCartItem.amount + action.item.amount
			};

			updatedItems = [...state.items];
			updatedItems[existingItemIndex] = updatedItem; // overwrite that existing index with the right amount

		} else {
					// generate a new array with concat()
			updatedItems = state.items.concat(action.item);
		}
		

		return {
			items: updatedItems,
			totalAmount: updatedTotal,

		};

	}
	else if (action.type ==='REMOVE_ITEM'){



		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.id
			);

		const existingItem = state.items[existingItemIndex];

		// update price
		updatedTotal = state.totalAmount - existingItem.price;

		//  remove item if theres only 1
		if (existingItem.amount === 1) {
			updatedItems = state.items.filter ( item => item.id !== action.id);
		} else { // decrease amount
			updatedItem = {...existingItem, amount: existingItem.amount - 1};
			updatedItems = [...state.items]
			updatedItems[existingItemIndex] = updatedItem;
		}

		return {
			items: updatedItems,
			totalAmount: updatedTotal,

		};
	}

	return defaultCartState;
}

function CartProvider(props){

	const [cartState, cartDispatchFunction] = useReducer(reducer, defaultCartState);

	function addItemToCart(item) {
		cartDispatchFunction({
			type: 'ADD_ITEM',
			item: item,
		
		});
	}

	function removeItemFromCart(id){
		cartDispatchFunction({
			type: 'REMOVE_ITEM',
			id: id,
		
		});
	}

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCart,
		removeItem: removeItemFromCart,
	}

	return (
	<CartContext.Provider value={cartContext}>
		{props.children}
	</CartContext.Provider>)
}

export default CartProvider