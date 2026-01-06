import { JSX } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Footer(): JSX.Element {
	return (
		<footer className="flex flex-col gap-2 bg-[#1b1b1b] p-4 mt-4">
			<div className="flex-1">
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
					<hr className="md:hidden text-white" />
					<div className="flex-1">
						<h3 className="text-white mb-2">Lorem ipsum dolor sit amet consectetur adipisicing...</h3>
						<div className="flex gap-1">
							<input className="bg-[#C73659] text-white border-2 border-[#151515] rounded-md p-1 pr-10 w-[70%]" type="email" placeholder="Enter your email" />
							<button className="bg-[#A91D3A] w-[30%] text-white rounded-md cursor-pointer hover:bg-[#A91D4B] p-1">Subscribe</button>
						</div>
					</div>
				</div>
			</div>
			<div className="flex-1">
				<div className="flex">
					<div className="flex-1 text-center">
						<h3 className="text-white mb-2">Follow US</h3>
						<div className="flex justify-center">
							<a><FontAwesomeIcon className="text-white rounded-full p-2 border m-1 w-10 aspect-square" icon={faInstagram} /></a>
							<a><FontAwesomeIcon className="text-white rounded-full p-2 border m-1 w-10 aspect-square" icon={faFacebook} /></a>
							<a><FontAwesomeIcon className="text-white rounded-full p-2 border m-1 w-10 aspect-square" icon={faTwitter} /></a>
						</div>
					</div>
					<div className="flex-1 text-center">
						<h3 className="text-white mb-2">Contact US</h3>
						<a href="tel:+212694250007" className="text-white font-bold hover:underline">+212 694250007</a>
					</div>
				</div>
				<hr className="text-white m-3" />
				<div className="flex flex-col-reverse md:flex-row m-2">
					<div className="flex-1 text-white text-center md:text-left">
						<h3>Copyright © 2025 example.com</h3>
					</div>
					<div className="flex-1 flex gap-4 justify-center text-white">
						<h3>Privacy and Policy</h3>
						<h3>Term And Conditions</h3>
					</div>
				</div>
			</div>
		</footer>
	);
}
