'use client';
import { useState, type JSX } from 'react';

export default function	InfoProduct(): JSX.Element
{
	let	[ type_button, setTypeButton ] = useState<number>(1);

	return (
		<div>
			<div className="flex my-10 gap-5 border-t border-gray-500">
				<button onClick={() => (setTypeButton(1))} className={`p-2 cursor-pointer ${type_button === 1 ? "border-t-2" : ""}`}>Description</button>
				<button onClick={() => (setTypeButton(2))} className={`p-2 cursor-pointer ${type_button === 2 ? "border-t-2" : ""}`}>Additional information</button>
				<button onClick={() => (setTypeButton(3))} className={`p-2 cursor-pointer ${type_button === 3 ? "border-t-2" : ""}`}>Reviews (0)</button>
			</div>
			<div className={`${type_button === 1 ? "block" : "hidden"}`}>
				<h3 className="text-4xl font-bold mb-5">Product description</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia atque doloremque, maxime quia ipsum obcaecati beatae itaque, veritatis cum quas hic nisi consequuntur nam ullam! Illo veniam sit minus eaque.</p>
			</div>
			<div className={`${type_button === 2 ? "block" : "hidden"}`}>
				<table className="table-auto border-collapse border">
					<caption className="p-1">More Details</caption>
					<tbody className="p-4">
						<tr className="font-normal">
							<th className="borde p-2">color</th>
							<th className="border p-2 w-full text-start font-normal">black</th>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={`${type_button === 3 ? "block" : "hidden"}`}>
				<p>There are no reviews yet.</p>
			</div>
		</div>
	);
}
