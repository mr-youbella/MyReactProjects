import type { JSX } from 'react';
import Image from 'next/image';
import MenuBar from '../../MenuBar';
import Footer from '../../Footer';
import InfoProduct from './InfoProduct';
import AddToCartForm from './AddToCartForm';
import ProductApi from '../../Api/ProductsApi'
import type { ProductsType } from '../../Interfaces/ProductsType'

export default async function	Product(props: {searchParams: {id: string}}): Promise<JSX.Element>
{
	const	searchParams = await props.searchParams;
	const	id_product: number | undefined = Number(searchParams.id);
	let		products: ProductsType[] | undefined = undefined;
	let		current_product: ProductsType | undefined = undefined;
	try
	{
		products = await ProductApi();
		current_product = products && products[id_product - 1];
	}
	catch (err)
	{
		console.log(err);
	}

	return (
		<div>
			<MenuBar />
			<div className="p-10 md:mx-40">
				<div className="flex flex-col md:flex-row gap-2">
					<div className="flex-1 justify-items-center">
						<div className="relative w-full md:w-[70%] aspect-square border border-gray-500 transition duration-300 hover:scale-105">
							<Image className="object-cover" src={current_product && current_product.image || ""} alt="product" fill/>
						</div>
					</div>
					<div className="flex-1 w-full flex flex-col justify-center">
						<p className="mb-5">Name Gategory</p>
						<h1 className="text-7xl mb-5">{current_product && current_product.title || "TITLE"}</h1>
						<h2 className="text-2xl font-bold mb-5">{current_product && current_product.price || "00.00"} DH<del className="opacity-50 font-normal ml-2 text-xl">{current_product && current_product.old_price ? (current_product.old_price + "DH") : ""}</del></h2>
						<p className="mb-5">Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.</p>
						<hr className="mb-5" />
						<AddToCartForm current_product={current_product}/>
					</div>
				</div>
				<InfoProduct />
			</div>
			<Footer />
		</div>
	);
}
