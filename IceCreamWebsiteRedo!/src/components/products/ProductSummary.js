import styles from './ProductSummary.module.css';

function ProductSummary(props){

	return(
		<section className={styles.summary}>
			<h2>Cavallo Ice Cream</h2>
		<p>
			Cavallo is an ice cream shop in Seaton
			Delaval, Northumberland
		</p>
		<p>
			Address: Avenue
			Cresent, Seaton Delaval, Northumberland NE25 0DN
		</p>
		<p>
			We accept orders for pick up and also deliver!
		</p>
	  </section>
	)
}

export default ProductSummary;