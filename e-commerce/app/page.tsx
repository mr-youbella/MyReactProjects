import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Products from './Products';
import FrontPage from './FrontPage';

export default function Home()
{
	return (
		<div>
			<FrontPage />
			<Products />
			<footer className="flex flex-col bg-[#1b1b1b] p-4 mt-5">
				<div className="p-2 flex">
					<div>
						<img className="w-20 cursor-pointer" src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png" />
					</div>
					<div className="w-full flex justify-center items-center">
						<h2 className="text-5xl text-white">Youbella Store</h2>
					</div>
				</div>
				<div className="flex flex-col md:flex-row gap-5">
					<div className="flex-1">
						<h3 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo aspernatur ab vel explicabo!</h3>
					</div>
					<hr className="md:hidden text-white"/>
					<div className="flex-1">
						<h3 className="text-white mb-2">Lorem ipsum dolor sit amet consectetur adipisicing...</h3>
						<div className="flex gap-1">
							<input className="bg-[#C73659] text-white border-2 border-[#151515] rounded-md p-1 pr-10 w-[70%]" type="email" placeholder="Enter your email"/>
							<button className="bg-[#A91D3A] w-[30%] text-white rounded-md cursor-pointer hover:bg-[#A91D4B]">Subscribe</button>
						</div>
					</div>
					<div className="flex-1 justify-items-center">
						<h3 className="text-white mb-2">Follow US</h3>
						<div>
							<FontAwesomeIcon className="text-white rounded-full p-2 border m-1" icon={faInstagram}/>
							<FontAwesomeIcon className="text-white rounded-full p-2 border m-1" icon={faFacebook}/>
							<FontAwesomeIcon className="text-white rounded-full p-2 border m-1" icon={faTwitter}/>
						</div>
					</div>
					<div className="flex-1">
						<h3 className="text-white mb-2">Contact US</h3>
						<a href="tel:+212694250007" className="text-white text-xl font-bold">+212 694250007</a>
					</div>
				</div>
				<hr className="text-white m-3"/>
				<div className="flex p-4">
					<div className="flex-1 text-white">
						<h3>Copyright © 2025 example.com</h3>
					</div>
					<div className="flex-1 flex gap-4 text-white">
						<h3>Privacy and Policy</h3>
						<h3>Term And Conditions</h3>
					</div>
				</div>
			</footer>
		</div>
	);
}
