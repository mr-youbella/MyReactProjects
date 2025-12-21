import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios'
import type { dataTypePrayingTime, dataTypeCurrentCity } from './interfaces';
import PrayerCard  from './PrayerCard';
import Header  from './Header';

function App()
{
	let	[data, setData] = useState<dataTypePrayingTime | null>(null);
	let	[city, setCity] = useState<dataTypeCurrentCity | null>(null);
	let	[city_select, setCitySelect] = useState<string | undefined>("Loading..");

	useEffect(() =>
	{
		async function getCity()
		{
			let	response = await axios.get("https://ipinfo.io/json?token=80928dffd09b89");
			let city_data: dataTypeCurrentCity =
			{
				city: response.data.city,
				country: response.data.country,
			}
			setCity(city_data);
			setCitySelect(city_data.city);
		}
		getCity();
	}, []);
	useEffect(() =>
	{
		async function getData()
		{
			let	response = await axios.get("https://api.aladhan.com/v1/timingsByCity/17-12-2025?country=" + city?.country + "&city=" + city_select);
			let time_praying: dataTypePrayingTime =
			{
				fajr: response.data.data.timings.Fajr,
				dhuhr: response.data.data.timings.Dhuhr,
				asr: response.data.data.timings.Asr,
				maghrib: response.data.data.timings.Maghrib,
				isha: response.data.data.timings.Isha,
			}
			setData(time_praying);
		}
		getData();
	}, [city_select]);

	return (
		<div className="h-235 flex flex-col justify-center items-center">
			<div>
				<Header data={data} city_select={city_select}/>
				<div className="grid grid-cols-2 sm:grid-cols-5 gap-5 p-2">
					<PrayerCard name="Fajr" time={data?.fajr} data={data} img="https://meaning-of-number.com/wp-content/uploads/2023/10/fajr-prayer-time-1024x585.jpg"/>
					<PrayerCard name="Dhuhr" time={data?.dhuhr} data={data} img="https://jesusprayerministry.com/wp-content/uploads/2023/12/dua-in-dhuhr-prayer.jpg"/>
					<PrayerCard name="Asr" time={data?.asr} data={data} img="https://tse4.mm.bing.net/th/id/OIP.4bjkGoR_gXGeTv6F0KCHZwHaEK?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"/>
					<PrayerCard name="Maghrib" time={data?.maghrib} data={data} img="https://tse3.mm.bing.net/th/id/OIP.FpSOoK0N773DB9tKH-TkfgHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"/>
					<PrayerCard name="Isha" time={data?.isha} data={data} is_last={true} img="https://jesusprayerministry.com/wp-content/uploads/2023/12/recitation-in-isha-prayer.jpg"/>
				</div>
			</div>
			<div className="mt-4 bg-gray-400 p-1 rounded-xl mx-auto">
				<select value={city_select} onChange={(event) => (setCitySelect(event.target.value))}>
					<option>{city?.city}</option>
					<option>Agadir</option>
					<option>Khouribga</option>
					<option>Tetouan</option>
				</select>
			</div>
		</div>
	);
}

export default App
