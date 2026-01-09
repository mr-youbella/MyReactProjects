'use client';
import { JSX, useState } from 'react';
import ProductApi from '../Api/ProductsApi';
import Link from 'next/link';
import Image from 'next/image';
import { ProductsType } from '../Interfaces/ProductsType';

interface product_style
{
	product_div: string,
	product_div_img: string,
	product_img: string,
	product_title: string,
	product_price: string,
	old_product_price: string,
}

export default async function	FilterProduct(): Promise<JSX.Element>
{
	let	gategory =
	[
		{
			name: "Electorinic",
			amount: 3
		},
		{
			name: "Beuaty",
			amount: 13
		},
		{
			name: "Sport",
			amount: 37
		},
	];
	let	[index_gategory, setIndexGtergory] = useState<number>(0);
	let	all_product_style: product_style =
	{
		product_div: "w-full sm:w-[80%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105",
		product_div_img: "relative aspect-square w-full mb-2 border-1 rounded-sm",
		product_img: "object-content rounded-md",
		product_title: "text-sm",
		product_price: "font-bold",
		old_product_price: "text-xs opacity-55",
	};
	let	products: ProductsType[] | undefined = undefined;
	try
	{
		products = await ProductApi();
	}
	catch (err)
	{
		console.log(err);
	}

	return (
		<div className="flex flex-col sm:flex-row sm:my-20 xl:mx-45">
			<div className="sm:w-[35%] p-10">
				<h3 className="text-xl mb-2">Filter by Price</h3>
				<input className="block w-full mb-2" type="range"/>
				<div className="flex">
					<button className="rounded-sm text-white bg-blue-500 p-1 w-[30%] mb-2 mr-2">Filter</button>
					<p className="flex justify-end my-auto w-full h-full">Price: $40 — $150</p>
				</div>
				<h3 className="mt-10 mb-5 text-2xl">Gategory</h3>
				<div className="flex flex-col leading-5">
					{gategory.map((value, index) =>
					{
						return (
							<button key={index} onClick={() => (setIndexGtergory(index), console.log(index))} className="text-start flex justify-between py-2 cursor-pointer hover:text-cyan-700">{value.name}<span>({value.amount})</span></button>
						);
					})}
				</div>
			</div> 
			<div className="bg-white w-full ">
				<div className="m-[10%]">
					<h3 className="text-4xl font-bold mb-10">{gategory[index_gategory].name}</h3>
					<p>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed ut.</p>
					<div className="flex justify-end">
						<select className="my-5 p-1 border rounded-sm">
							<option>Sort by price: low to high</option>
							<option>Sort by price: high to low</option>
						</select>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-3 gap-1 justify-items-center text-black">
						{products?.map((value, index) =>
						{
							return (
								<Link key={index} className={all_product_style.product_div} href={`./Store/${value.title}?id=${value.id}`}>
									<div className={all_product_style.product_div_img}>
											<Image className={all_product_style.product_img} src={value.image} alt="Product Image" fill sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"/>
									</div>
									<div className="leading-none">
										<h3 className={all_product_style.product_title}>{value.title}</h3>
										<p className={all_product_style.product_price}>{value.price} DH</p>
										<del className={all_product_style.old_product_price}>{value.old_price ? (value.old_price + "DH") : ""}</del>
									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
