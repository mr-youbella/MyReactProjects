"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faList } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

export default function MenuBar()
{
	let	[menu_bar, setMenuBar] = useState<boolean>(false);

	return (
		<div>
			<div className={`flex delay-100 duration-300 ${menu_bar ? "bg-[#151515]" : "bg-[#15151560]"}`}>
				<div className="flex-1">
					<img className="w-20 cursor-pointer" src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"></img>
				</div>
				<div className="flex-1 hidden sm:flex justify-center items-center">
					<button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">Home</button>
					<button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">Store</button>
					<button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">About</button>
					<button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">Contact</button>
				</div>
				<div className="flex-1 hidden sm:flex justify-center items-center">
					<div className="relative w-[70%]">
						<input className="bg-[#8DB0F0] text-[#F4F8FF] border-2 border-[#202C45] rounded-2xl p-1 pr-10 w-full" type="text" placeholder="Not working yet" readOnly />
						<FontAwesomeIcon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer" icon={faMagnifyingGlass} />
					</div>
				</div>
				<div className="flex sm:hidden justify-center items-center m-2">
					<FontAwesomeIcon onClick={() => (setMenuBar(!menu_bar))} className="text-white text-4xl" icon={faList} />
				</div>
			</div>
			<div className={`flex flex-col justify-center items-start bg-[#151515] duration-500 ${!menu_bar ? "opacity-0 h-0" : "opacity-100 h-fit"}`}>
				<button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">Home</button>
				<button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">Store</button>
				<button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">About</button>
				<button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">Contact</button>
				<div className="flex justify-center items-center w-full">
					<div className="relative w-[80%] m-4">
						<input className="bg-[#8DB0F0] text-[#F4F8FF] border-2 border-[#202C45] rounded-2xl p-1 pr-10 w-full" type="text" placeholder="Not working yet" readOnly />
						<FontAwesomeIcon className="w-5 h-5 absolute top-1/2 -translate-1/2 right-1 cursor-pointer" icon={faMagnifyingGlass} />
					</div>
				</div>
			</div>
		</div>
	);
}
