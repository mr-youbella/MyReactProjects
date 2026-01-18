import type { ProductsType } from '../Interfaces/ProductsType'

export default async function ProductApi(): Promise<ProductsType[] | undefined>
{
	let	products: ProductsType[] | undefined = undefined;
	try 
	{
		let response = await fetch("https://test-production-5fea.up.railway.app/products",
		{
			next: {revalidate: 60}
		});
		if (!response.ok)
			throw new Error("Failed to fetch products");
		products = await response.json();
	}
	catch
	{
		console.log("Failed to get products Data...");
	}
	return (products);
}

