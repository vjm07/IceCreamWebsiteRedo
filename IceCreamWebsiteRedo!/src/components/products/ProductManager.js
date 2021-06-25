import {Fragment} from 'react';
import ProductSummary from "./ProductSummary";
import AvailableProducts from "./AvailableProducts";

function Product(props){

	return(
		<Fragment>
			<ProductSummary/>
			<AvailableProducts/>
		</Fragment>
	)
}

export default Product;