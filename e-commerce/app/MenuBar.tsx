"use client";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faList } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { JSX } from 'react';
import type { ProductsType } from './Interfaces/ProductsType'

interface	props_SearchResult
{
	products: ProductsType[] | undefined,
	search: string,
	is_focus: boolean,
}

function SearchResult({products, search, is_focus}: props_SearchResult): JSX.Element
{
	return (
		<div className={`w-full z-10 bg-[#151515] text-white p-4 overflow-x-auto absolute mt-3 custom-scroll transition duration-300 ${!is_focus ? "opacity-0" : "opacity-100"}`}>
			{products && search.length != 0 && products.filter((value) => (value.title.toLowerCase().includes(search.toLowerCase()))).map((value, index) =>
			{
				return (
					<Link key={index} className="flex items-center gap-2 m-1 p-2 rounded-sm bg-[#343232] cursor-pointer hover:bg-[#312f2f]" href={`/Store/${value.title}?id=${value.id}`}>
						<img className="aspect-square w-10" src={value.image}/>
						<h2>{value.title}</h2>
						<p>{value.price} DH</p>
					</Link>
				);
			})}
		</div>
	);
}

export default function MenuBar()
{
	let	[menu_bar, setMenuBar] = useState<boolean>(false);
	let	[is_focus, setIsFocus] = useState<boolean>(false);
	let	[search, setSearch] = useState<string>("");
	let	[products, setProducts] = useState<ProductsType[] | undefined>();
	useEffect(() =>
	{
		async function ftProducts()
		{
			let	products_api = await fetch("https://raw.githubusercontent.com/mr-youbella/MyReactProjects/refs/heads/main/e-commerce/public/products.json", {next: {revalidate: 60}});
			let	get_products: ProductsType[] = await products_api.json();
			setProducts(get_products);
		}
		ftProducts();
	}, []);

	return (
		<div>
			<div className={`flex delay-100 duration-300 ${menu_bar ? "bg-[#151515]" : "bg-[#15151560]"}`}>
				<div className="flex-1">
					<div className="aspect-square w-20 cursor-pointer relative">
						<Link href="/" className="absolute inset-0 z-10"></Link>
						<Image className="object-cover" fill src="/products_images/logo.webp" alt="logo" sizes="80px"/>
					</div>
				</div>
				<div className="flex-1 hidden sm:flex justify-center items-center">
					<Link href="/"><button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">Home</button></Link>
					<Link href="/Store"><button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">Store</button></Link>
					<button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">About</button>
					<button className="text-2xl mx-2 font-bold text-[#ffffff] transition-color duration-400 hover:text-[#314e81] cursor-pointer">Contact</button>
				</div>
				<div className="flex-1 hidden sm:flex justify-center items-center relative">
					<div className="relative w-[70%]">
						<input value={search} onChange={(event) => (setSearch(event.target.value))} onFocus={() => (setIsFocus(true))} onBlur={() => (setIsFocus(false))} className="bg-[#8DB0F0] text-[#F4F8FF] border-2 border-[#202C45] rounded-2xl p-1 pr-10 w-full" type="text" placeholder="Search your Product" />
						<FontAwesomeIcon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer" icon={faMagnifyingGlass} />
						<SearchResult products={products} search={search} is_focus={is_focus}/>
					</div>
				</div>
				<div className="flex sm:hidden justify-center items-center m-2">
					<FontAwesomeIcon onClick={() => (setMenuBar(!menu_bar))} className="text-white text-4xl" icon={faList} />
				</div>
			</div>
			<div className={`flex flex-col justify-center items-start bg-[#151515] duration-500 ${!menu_bar ? "opacity-0 h-0" : "opacity-100 h-fit"}`}>
				<Link href="/"><button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">Home</button></Link>
				<Link href="/Store"><button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">Store</button></Link>
				<button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">About</button>
				<button className="text-2xl mx-5 p-1 font-bold text-[#A2B2D2] transition-color duration-400 hover:text-[#F4F8FF] cursor-pointer">Contact</button>
				<div className="flex justify-center items-center w-full">
					<div className="relative w-[80%] m-4">
						<input value={search} onChange={(event) => (setSearch(event.target.value))} onFocus={() => (setIsFocus(true))} onBlur={() => (setIsFocus(false))} className="bg-[#8DB0F0] text-[#F4F8FF] border-2 border-[#202C45] rounded-2xl p-1 pr-10 w-full" type="text" placeholder="Search your Product" />
						<FontAwesomeIcon className="w-5 h-5 absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer" icon={faMagnifyingGlass} />
						<SearchResult products={products} search={search} is_focus={is_focus}/>
					</div>
				</div>
			</div>
		</div>
	);
}
