import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react';
import axios from 'axios';

interface weatherData
{
	temp: number,
	status: string,
	icon: string,
}

function App() {
	let 	date = new Date();
	let		check_day: boolean = date.getHours() >= 6 && date.getHours() <= 19;
	let		[city, setCity] = useState<string>("");
	let		[temp, setTemp] = useState<weatherData>({ temp: 0, status: "", icon: "" });

	useEffect(() =>
	{
		axios.get("https://ipinfo.io/json?token=80928dffd09b89").then((response) => (setCity(response.data.city))).catch(error => (console.log(error)));
	}, []);
	useEffect(() =>
	{
		if (!city)
			return;
		axios.get("https://api.weatherapi.com/v1/current.json?key=17c5e5b90d75464ca4c214535251212&q=" + city).then((response) => (setTemp({ temp: response.data.current.temp_c, status: response.data.current.condition.text, icon: response.data.current.condition.icon }))).catch((error) => (console.log("Error is " + error)));
	}, [city]);

	return (
		<div className="bg-blue-500 h-screen flex justify-center items-center">
			<div className="bg-blue-700 w-150 h-80 rounded-2xl p-4 m-4">
				<h1 className="text-white font-bold text-3xl"><a href={`https://en.wikipedia.org/wiki/${city}`}>{city || "wait..."}</a><span className="ml-2 text-sm font-normal">{`${date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric"})}`}</span></h1>
				<hr className="text-white mt-3" />
				<div className="flex h-[calc(100%-36px)]">
					<div className="flex-1">
						<h2 className="mt-5 font-bold text-white text-8xl">{temp.temp || "00"}</h2>
						<h3 className="text-white text-2xl mt-3">{temp.status || "Wait..."}</h3>
					</div>
					<div className="mt-10 text-6xl text-yellow-400">
						{check_day ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
					</div>
					<div className="flex flex-1 items-center justify-center">
						<img src={temp.icon || undefined} alt="Status" className="w-50"></img>
					</div>
				</div>

			</div>
		</div>
	);
}

export default App;
