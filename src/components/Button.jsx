import React from 'react';
import PropTypes from 'prop-types';
import styles from '../CSS/Button.module.css'
import Spinner from './Spinner';

const Button = ({ color, text, onClick, disabled }) => {

	return (
		<button 
			style={{ color }} 
			className={styles.button}
			onClick={onClick}
			disabled={disabled}
		>
			{disabled ? <Spinner/> : text}
		</button>
	)
}

Button.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func,
	disabled: PropTypes.bool
}

export default Button;
