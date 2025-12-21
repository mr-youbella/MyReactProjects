import type { JSX } from 'react';
import type { propsType } from './interfaces';

export default function PrayerCard({name, time, data, is_last, img}: propsType): JSX.Element
{
	let	background_card: string = "bg-red-700";
	let	center_last_card = is_last ? "sm:col-span-1 col-span-2 justify-self-center" : "";
	let	date = new Date();
	if (time)
	{
		let	[h, m] = time.split(':').map(Number);
		let	total_minuts = h * 60 + m;
		let	current_minuts = date.getHours() * 60 + date.getMinutes();
		background_card = current_minuts >= total_minuts ? "bg-green-700" : "bg-yellow-800";
	}

	return (
		<div className={background_card + " flex flex-col p-1 rounded-xl " + center_last_card}>
			<div className="flex-1">
				<img className="w-full h-30 rounded-xl" src={img} />
			</div>
			<div className="flex-1">
				<h2 className="text-left p-2 text-2xl text-white">{name}</h2>
				<h2 className="text-left p-2 text-xl font-bold">{data ? time : "Lodaing..."}</h2>
			</div>
		</div>
	);
}
