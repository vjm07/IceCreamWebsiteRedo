import React from 'react';

const CartContext = React.createContext(

	// stuff i want multiple components to have
	{
		items: [],
		totalAmount: 0,
		addItem: (item) =>{},
		removeItem: (id) => {},
	}
);

export default CartContext;