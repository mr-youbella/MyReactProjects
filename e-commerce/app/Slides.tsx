'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';

export default function Slides()
{
	let images: Array<string> = ["https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg", "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg", "https://images.pexels.com/photos/772219/pexels-photo-772219.jpeg", "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg", "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg", "https://images.pexels.com/photos/34950/pexels-photo.jpg", "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg", "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg", "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg", "https://images.pexels.com/photos/1574843/pexels-photo-1574843.jpeg"];
	let	[current_slide, setCurrentSide] = useState<number>(0);

	useEffect(() =>
	{
		let	interval = setInterval(() =>
		{
			setCurrentSide((pre_value) => ((pre_value + 1) % images.length));
		}, 5000);
		return (() => (clearInterval(interval)));
	}, [current_slide]);

	return (
		<div className="overflow-hidden m-4 rounded-xl md:w-1/2 md:mx-auto flex">
			<div className="flex transition-transform duration-500" style={{transform: `translateX(-${current_slide * 100}%)`}}>
				{images.map((value, index) =>
				{
					return (
						<div key={index} className="w-full min-w-full">
							<div className="relative">
								<img className="w-full h-50 md:h-100 object-content" src={value}/>
								<button onClick={() => (setCurrentSide((pre_value) => ((pre_value + 1) % images.length)))} className="w-10 h-10 absolute top-1/2 right-4 bg-amber-100 rounded-2xl p-2 cursor-pointer hover:bg-amber-200"><FontAwesomeIcon icon={faArrowRight}/></button>
								<button onClick={() => (setCurrentSide((pre_value) => ((pre_value - 1 + images.length) % images.length)))} className="w-10 h-10 absolute top-1/2 left-4 bg-amber-100 rounded-2xl p-2 cursor-pointer hover:bg-amber-200"><FontAwesomeIcon icon={faArrowLeft}/></button>
							</div>
						</div>
					);
				})};
			</div>
		</div>
	);
}
