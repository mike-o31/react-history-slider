import React from 'react';
import './Slider.css';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';

const BtnSlider = ({ direction, moveSlide }) => {
	return (
		<button
			className={direction === 'next' ? 'btn-slide next' : 'btn-slide previous'}
			onClick={moveSlide}>
			{direction === 'next' ? (
				<BsArrowRight className='icons' />
			) : (
				<BsArrowLeft className='icons' />
			)}
		</button>
	);
};

export default BtnSlider;
