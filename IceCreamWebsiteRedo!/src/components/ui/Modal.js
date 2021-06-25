import styles from './Modal.module.css';
import React, {Fragment} from 'react';
import ReactDOM  from 'react-dom';

function Backdrop(props){
	return <div className={styles.backdrop} onClick={props.hideCart}>{}</div>
}

function ModalOverlay(props){

	return(
		<div className={styles.modal} >
			<div className={styles.content}>{props.children}</div>
		</div>

	)
}

const htmlElement = document.getElementById("overlays");

function Modal(props){

	return(
		<Fragment>
			{ReactDOM.createPortal(<Backdrop hideCart={props.hideCart}/>, htmlElement)}
			{ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, htmlElement)}

		</Fragment>
	)
}

export default Modal;