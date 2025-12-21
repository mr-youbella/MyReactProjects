import { useEffect, useState } from 'react';
import type { JSX } from 'react';
import type { dataTypePrayingTime, propsType } from './interfaces';

export default function Header({data, city_select}: propsType): JSX.Element
{
	let	[date, setDate] = useState<string | null>(null);
	let	date_now = new Date();
	let	time_minuts = date_now.getHours() * 60 + date_now.getMinutes();
	let	[time_next_pray, setTimeNextPrayS] = useState<string>("00:00:00");
	let	next_pray: keyof dataTypePrayingTime = "fajr";
	function timePrayByMinuts(time: string)
	{
		let	[h, m] = time.split(':').map(Number);
		return (h * 60 + m);
	}
	if (data)
	{
		if (time_minuts >= timePrayByMinuts(data.fajr) && time_minuts < timePrayByMinuts(data.dhuhr))
			next_pray = "dhuhr";
		else if (time_minuts >= timePrayByMinuts(data.dhuhr) && time_minuts < timePrayByMinuts(data.asr))
			next_pray = "asr";
		else if (time_minuts >= timePrayByMinuts(data.asr) && time_minuts < timePrayByMinuts(data.maghrib))
			next_pray = "maghrib";
		else if (time_minuts >= timePrayByMinuts(data.maghrib) && time_minuts < timePrayByMinuts(data.isha))
			next_pray = "isha";
		else
			next_pray = "fajr";
	}

	useEffect(() =>
	{
		let	time_next_pray_socend: number = 0;
		if (!data?.[next_pray])
			time_next_pray_socend = 0;
		else
			time_next_pray_socend = ((timePrayByMinuts(data?.[next_pray])) * 60) - (time_minuts * 60);
		if (time_next_pray_socend < 0)
		{
			let	date = new Date();
			date = new Date(date.setHours(24, 0, 0, 0));
			let	time_minuts_0 = date.getHours() * 60 + date.getMinutes();
			time_next_pray_socend = time_minuts - time_minuts_0;
		}
		let	interval = setInterval(() =>
		{
			let	socend: string = time_next_pray_socend % 60 < 10 ? `0${time_next_pray_socend % 60}`: `${time_next_pray_socend % 60}`;
			let	format_time: string = `${Math.floor(time_next_pray_socend / 3600)}:${Math.floor((time_next_pray_socend % 3600) / 60)}:${socend}`;
			time_next_pray_socend--;
			setTimeNextPrayS(format_time);
		}, 1000);
		return (() => (clearInterval(interval)));
	}, [data, city_select]);
	
	useEffect(() =>
	{
		let	dateNow = new Date;
		setDate(dateNow.toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"}));
	}, []);

	return (
		<div className="flex">
			<div className="flex-1 p-2">
				<h3 className="text-left text-gray-400">{date}</h3>
				<h2 className="text-left text-4xl text-white font-bold">{city_select}</h2>
			</div>
			<div className="flex-1 p-2">
				<h3 className="text-left text-xl text-gray-400">Next pray is <span className="text-gray-300 capitalize">{next_pray}</span> after</h3>
				<h3 className="text-left text-3xl text-white font-bold">{data ? time_next_pray : ""}</h3>
			</div>
		</div>
	);
}
