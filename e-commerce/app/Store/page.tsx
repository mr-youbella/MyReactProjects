import type { JSX } from 'react';
import MenuBar from '../MenuBar';
import Footer from '../Footer';
import FilterProduct from './FilterProducts';


export default async function	Products(): Promise<JSX.Element>
{
	return (
		<>
			<MenuBar />
			<FilterProduct />
			<Footer />
		</>
	);
}
