import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import MainTasks from './MainTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpLong } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

window.addEventListener("storage", (event) => (localStorage.setItem(event.key, event.oldValue)));

function ButtonStart()
{
	return (
		<div className="h-screen flex justify-center items-center relative">
			<Link to="/MainTasks"><h2 className="bg-green-500 rounded-2xl border-amber-100 text-amber-100 font-bold text-2xl p-4 cursor-pointer duration-150 hover:bg-green-600 hover:text-gray-600">Go to your Tasks</h2></Link>
		</div>
	);
}

function	App()
{
    let [scroll, setScroll] = useState(window.pageYOffset || document.documentElement.scrollTop)
    window.addEventListener("scroll", () => (setScroll(window.pageYOffset || document.documentElement.scrollTop)));

	return (
		<div className="relative">
			<div className="bg-amber-50 w-full flex p-4 mb-3">
				<Link to="/"><h1 className="text-2xl font-bold">Todo List</h1></Link>
				<h2 className="text-xl text-amber-700 font-bold flex flex-1 justify-end"><a href="https://www.instagram.com/master_youbella/" target="_blank" rel="noreferrer">Master Youbella</a></h2>
			</div>
			<Routes>
				<Route path="*" element={<ButtonStart />} />
				<Route path="/MainTasks" element={<MainTasks />} />
			</Routes>
			<div>
				{scroll > 200 ? <div onClick={() => (window.scrollTo({top: 0, behavior: "smooth"}))} className="bg-blue-500 w-20 h-20 rounded-full fixed bottom-5 right-5 flex justify-center items-center text-4xl cursor-pointer hover:bg-blue-600"><FontAwesomeIcon icon={faUpLong}/></div> : <></>}
			</div>
		</div>
	);
}

export default App;
