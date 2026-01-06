import Image from 'next/image';

interface product_style
{
	product_div: string,
	product_div_img: string,
	product_img: string,
	product_title: string,
	product_price: string,
	old_product_price: string,
}
interface Products
{
	title: string;
	price: number;
	old_price?: number;
	image: string;
	is_new_product: boolean;
}

export default async function Products()
{
	let slide_product_style: product_style =
	{
		product_div: "cursor-pointer hover:shadow-2xl p-1 transition duration-300 hover:scale-105",
		product_div_img: "relative aspect-square w-35 md:w-45 mb-2 border rounded-sm overflow-hidden",
		product_img: "object-cover rounded-md",
		product_title: "text-sm",
		product_price: "font-bold",
		old_product_price: "text-xs opacity-55",
	};
	let	all_product_style: product_style =
	{
		product_div: "w-full cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105",
		product_div_img: "relative aspect-square w-full mb-2 border-1 rounded-sm",
		product_img: "object-content rounded-md",
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
			<div className="lg:mx-auto lg:w-2/3 bg-linear-to-r from-green-200 to-red-300 rounded-md m-1 relative group">
				<div className="flex m-2">
					<div className="flex-1">
						<h3 className="text-xl font-bold">New Offre ➡️</h3>
						<hr className="w-full" />
					</div>
					<div>
						<h5 className="text-md text-orange-700 cursor-pointer">More Products {'>'}</h5>
					</div>
				</div>
				<div className="overflow-y-hidden custom-scroll">
					<div className="flex text-[#000000] m-2 gap-2">
						{products.filter((value) => (value.is_new_product)).map((value, index) =>
						{
							return (
								<div key={index} className={slide_product_style.product_div}>
									<div className={slide_product_style.product_div_img}>
										<Image className={slide_product_style.product_img} src={value.image} alt="Product Image" fill sizes="(max-width: 768px) 140px, 180px"/>
									</div>
									<h3 className={slide_product_style.product_title}>{value.title}</h3>
									<div className="leading-none"> 
										<p className={slide_product_style.product_price}>{value.price} DH</p>
										{value.old_price && <del className={slide_product_style.old_product_price}>{value.old_price} DH</del>}
									</div>
								</div>
							);
						})}
						<h3 className="text-3xl absolute right-4 top-1/2 -translate-y-1/2 bg-gray-400 aspect-square w-10 text-center rounded-full opacity-20 transition duration-300 group-hover:opacity-90">{">"}</h3>
						<h3 className="text-3xl absolute left-4 top-1/2 -translate-y-1/2 bg-gray-400 aspect-square w-10 text-center rounded-full opacity-20 transition duration-300 group-hover:opacity-90">{"<"}</h3>
					</div>
				</div>
			</div>
			<div className="m-1 lg:mx-auto p-3 lg:w-2/3 rounded-md bg-[#e6e6e6]">
				<div className="m-2">
					<h3 className="text-xl font-bold text-center">All Product</h3>
					<hr className="w-1/8 mx-auto text-blue-600" />
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-1 justify-items-center text-black">
					{products.map((value, index) =>
					{
						return (
							<div key={index} className={all_product_style.product_div}>
								<div className={all_product_style.product_div_img}>
									<Image className={all_product_style.product_img} src={value.image} alt="Product Image" fill sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"/>
								</div>
								<h3 className={all_product_style.product_title}>{value.title}</h3>
								<div className="leading-none">
									<p className={all_product_style.product_price}>{value.price} DH</p>
									<del className={all_product_style.old_product_price}>{value.old_price} DH</del>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}
