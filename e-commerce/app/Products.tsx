import { revalidatePath } from 'next/cache';
import Image from 'next/image';

interface slide_product_style
{
	product_div: string,
	product_img: string,
	product_div_img: string,
	product_title: string,
	product_price: string,
	old_product_price: string,
}
interface Products
{
	title: string;
	price: number;
	old_price: number;
	image: string;
	is_new_product: boolean;
}

export default async function Products()
{
	let	slide_product_style: slide_product_style =
	{
		product_div: "cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[13%]",
		product_img: "object-content rounded-md",
		product_div_img: "relative h-30.5 w-40.5 md:h-40.5 mb-2",
		product_title: "text-xs",
		product_price: "font-bold",
		old_product_price: "text-xs opacity-55 m-1",
	};
	let	all_product_style: slide_product_style =
	{
		product_div: "w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105",
		product_img: "object-content rounded-md",
		product_div_img: "relative h-30.5 md:h-50.5 mb-2",
		product_title: "text-sm",
		product_price: "font-bold",
		old_product_price: "text-xs opacity-55",
	};
	let response = await fetch("https://raw.githubusercontent.com/mr-youbella/MyReactProjects/refs/heads/main/e-commerce/public/products.json",
	{
		next: {revalidate: 60}
	});
	let	products: Products[] = await response.json();

	return (
		<div>
			<div className="overflow-y-hidden custom-scroll md:mx-auto sm:w-3/4 bg-[#546481] rounded-md m-3">
				<div className="m-2">
					<h3 className="text-xl font-bold">New Offre ➡️</h3>
					<hr className="w-full" />
				</div>
				<div className="flex text-[#F4F8FF] m-2 gap-2">
					{products.filter((value) => (value.is_new_product)).map((value, index) =>
					{
						return (
							<div key={index} className={slide_product_style.product_div}>
								<div className={slide_product_style.product_div_img}>
									<Image className={slide_product_style.product_img} src={value.image} alt="Product Image" fill />
								</div>
								<h3 className={slide_product_style.product_title}>{value.title}</h3>
								<p className={slide_product_style.product_price}>{value.price} DH<del className={slide_product_style.old_product_price}>{value.old_price} DH</del></p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="bg-[#394864] m-1 md:mx-auto  p-3 md:w-2/3 rounded-md">
				<div className="m-2">
					<h3 className="text-xl font-bold">All Product</h3>
					<hr className="w-full" />
				</div>
				<div className="grid grid-cols-2 md:grid-cols-5 gap-1 justify-items-center text-[#F4F8FF]">
					{products.map((value, index) =>
					{
						return (
							<div key={index} className={all_product_style.product_div}>
								<div className={all_product_style.product_div_img}>
									<Image className={all_product_style.product_img} src={value.image} alt="Product Image" fill />
								</div>
								<h3 className={all_product_style.product_title}>{value.title}</h3>
								<p className={all_product_style.product_price}>{value.price} DH<del className={all_product_style.old_product_price}>{value.old_price} DH</del></p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
