'use client';
import MenuBar from '../MenuBar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import type { JSX } from 'react';

export default function FrontPage(): JSX.Element
{
	let	bg_image:string = "/products_images/bg.jpg";

	return (
		<div className={`h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-center`} style={{backgroundImage: `url(${bg_image})`}}>
			<MenuBar />
			<div className="text-white p-10 sm:p-20 w-full sm:w-1/2">
					<h1 className="text-5xl sm:text-7xl mb-10 font-bold">Let's Level Up Your Game</h1>
					<h2 className="text-2xl">Nam natoque in massa bibendum lacus, et arcu cursus nisl rutrum at tincidunt in sit in massa adipiscing lorem fusce.</h2>
					<Link className="inline-block my-10 bg-amber-50 p-2 px-5 rounded-3xl text-black text-xl cursor-pointer hover:bg-amber-100" href="/Store">Shop Now</Link>
			</div>
			<div className="flex justify-center">
				<a className="scroll-smooth" href="#products"><FontAwesomeIcon className="text-center text-4xl mb-5 w-10 aspect-square animate-bounce" icon={faAnglesDown} /></a>
			</div>
		</div>
	);
}
