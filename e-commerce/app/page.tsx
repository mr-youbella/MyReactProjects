import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import Slides from './Slides'

export default function Home()
{
	return (
		<div>
			<div className="flex bg-[#151515]">
				<div className="flex-1">
					<img className="w-20 cursor-pointer" src="https://static.vecteezy.com/system/resources/previews/023/654/784/non_2x/golden-logo-template-free-png.png"></img>
				</div>
				<div className="flex-1 flex justify-center items-center">
					<h2 className="text-2xl mx-2 font-bold text-[#C73659] transition-color duration-400 hover:text-[#EEEEEE] cursor-pointer">Home</h2>
					<h2 className="text-2xl mx-2 font-bold text-[#C73659] transition-color duration-400 hover:text-[#EEEEEE] cursor-pointer">Store</h2>
					<h2 className="text-2xl mx-2 font-bold text-[#C73659] transition-color duration-400 hover:text-[#EEEEEE] cursor-pointer">About</h2>
					<h2 className="text-2xl mx-2 font-bold text-[#C73659] transition-color duration-400 hover:text-[#EEEEEE] cursor-pointer">Contact</h2>
				</div>
				<div className="flex-1 flex justify-center items-center">
					<div className="relative w-[70%]">
						<input className="bg-[#C73659] text-white border-2 border-[#151515] rounded-2xl p-1 pr-10 w-full" type="text" placeholder="Not working yet" readOnly />
						<FontAwesomeIcon className="w-5 h-5 absolute top-1/2 -translate-1/2 right-1 cursor-pointer" icon={faMagnifyingGlass} />
					</div>
				</div>
			</div>
			<Slides />
			<div className="overflow-y-hidden md:mx-auto w-[90%] bg-[#EEEEEE] rounded-md m-3">
				<div className="m-2">
					<h3 className="text-xl font-bold">Offre Now ➡️</h3>
					<hr className="w-full"/>
				</div>
				<div className="flex">
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-101 min-w-[45%] md:min-w-[15%]">
						<img className="h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
				</div>
			</div>
			<div className="bg-[#EEEEEE] m-1 md:mx-auto  p-3 md:w-2/3 rounded-md text-[#151515]">
				<div className="m-2">
					<h3 className="text-xl font-bold">All Product</h3>
					<hr className="w-full"/>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-5 gap-1 justify-items-center">
					<div className="w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105">
						<img className="w-50.5 h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://tse1.mm.bing.net/th/id/OIP.IWLaCH31RqHAU_1aq8YLgAAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105">
						<img className="w-50.5 h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://tse1.mm.bing.net/th/id/OIP.IWLaCH31RqHAU_1aq8YLgAAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105">
						<img className="w-50.5 h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105">
						<img className="w-50.5 h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://tse1.mm.bing.net/th/id/OIP.IWLaCH31RqHAU_1aq8YLgAAAAA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105">
						<img className="w-50.5 h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://tse2.mm.bing.net/th/id/OIP.TjBNXWlIeS008Y7zpTr31gHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105">
						<img className="w-50.5 h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://tse2.mm.bing.net/th/id/OIP.TjBNXWlIeS008Y7zpTr31gHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
					<div className="w-[90%] cursor-pointer hover:shadow-2xl p-1 transation duration-300 hover:scale-105">
						<img className="w-50.5 h-30.5 md:h-50.5 rounded-2xl mb-2 object-content" src="https://ma.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/04/034646/1.jpg?2339"/>
						<h3 className="text-sm">32" Smart TV HD 32H5000F...</h3>
						<p className="font-bold">1302.3 DH <del className="text-xs opacity-55">1802.9 DH</del></p>
					</div>
				</div>
			</div>
			<footer className="flex flex-col bg-[#1b1b1b] p-4">
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
