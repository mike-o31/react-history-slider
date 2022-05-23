import React, { useState } from 'react';
import './Slider.css';
import { historyData } from '../constant/historyData';
import BtnSlider from './BtnSlider';

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(1);

	const nextSlide = () => {
		if (slideIndex !== historyData.length) {
			setSlideIndex(slideIndex + 1);
		} else if (slideIndex === historyData.length) {
			setSlideIndex(1);
		}
	};

	const previousSlide = () => {
		if (slideIndex !== 1) {
			setSlideIndex(slideIndex - 1);
		} else if (slideIndex === 1) {
			setSlideIndex(historyData.length);
		}
	};

	const moveDot = (index) => {
		setSlideIndex(index);
	};

	return (
		<div className='slider-container' key={historyData.id}>
			{historyData.map((data, index) => {
				return (
					<div
						className={
							slideIndex === index + 1 ? 'slide active-animation' : 'slide'
						}
						key={data.id}>
						<h1 className='year'>{data.year}</h1>
						<img src={data.image} alt='' />
						<div className='note-list'>
							{data.content.map((note) => (
								<p className='note'>{note}</p>
							))}
						</div>
					</div>
				);
			})}
			<BtnSlider moveSlide={nextSlide} direction={'next'} />

			<BtnSlider moveSlide={previousSlide} direction={'previous'} />

			<div className='container-dots'>
				{Array.from({ length: historyData.length }).map((item, index) => (
					<div
						className={slideIndex === index + 1 ? 'dot active' : 'dot'}
						onClick={() => moveDot(index + 1)}></div>
				))}
			</div>
		</div>
	);
};

export default Slider;
