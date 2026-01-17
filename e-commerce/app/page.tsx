import Products from './Home/Products';
import FrontPage from './Home/FrontPage';
import Footer from './Footer';

export default function Home()
{

	fetch("https://test-production-8446.up.railway.app/products").then((response) => (response.json())).then((response) => (console.log(response)));

	return (
		<div>
			<FrontPage />
			<Products />
			<Footer />
		</div>
	);
}
