import styles from './Header.module.css';
import {Fragment} from 'react'
import HeaderButton from './HeaderButton';

// import image
import headerImage from '../pictures/header.jpg';


function Header(props){

	return (
		<Fragment>
			<header className={styles.header}>
				<h1>Ice Cream Website</h1>
				<HeaderButton showCart={props.showCart}/>
			</header>
			<div className={styles.headerImage}>
				<img src={headerImage} alt="Ice cream"/>
			</div>
		</Fragment>
	)

}

export default Header;