import styles from './AvailableProducts.module.css';
import Card from '../ui/Card';
import ProductItem from './productItem/ProductItem';

const DUMMY_MEALS = [
	{
	  id: 'v1',
	  name: 'Plain Vanilla',
	  description: 'Irresistibly smooth Vanilla ice cream made with Madagascan vanilla',
	  price: 5.75,
	},
	{
	  id: 'v2',
	  name: 'Vanilla - Dairy free',
	  description: 'Same great taste - just no cows!',
	  price: 6.5,
	},
	{
	  id: 'h1',
	  name: 'Honeycomb',
	  description: 'Bees! ( ^^)/',
	  price: 2.99,
	},
	{
	  id: 'rr1',
	  name: 'Rum and Raisin',
	  description: 'Always a good combination!',
	  price: 8.99,
	},
	{
		id: 'm1',
		name: 'Mint',
		description: 'Green leaf ice cream.',
		price: 2.99,
	},
	{
		id: 'c1',
		name: 'Cherry',
		description: 'Dr Pepper :/',
		price: 2.99,
	},
	{
		id: 'c2',
		name: 'Chocolate',
		description: 'Yeah Bwoi',
		price: 3.99,
	},
	{
		id: 'sc1',
		name: 'Salted Caramel',
		description: 'Caramel with salt O.O',
		price: 4.99,
	},
	{
		id: 's1',
		name: 'Strawberry',
		description: 'Straw-very nice ;)',
		price: 3.49,
	},
  ];

function AvailableProducts(props) {


		const listOfMeals = DUMMY_MEALS.map(function(product){
	
		return (
		<ProductItem 
		id={product.id}
		key={product.id} 
		name={product.name} 
		description={product.description} 
		price={product.price}/>)
	});

	return(
		<section className={styles.product}>
			<Card>
				<ul>
					{listOfMeals}
				</ul>
			</Card>
		</section>
	)
}

export default AvailableProducts;