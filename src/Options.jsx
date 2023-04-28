export default function Options({ handleShirtColor, handleDesignColor }) {
	return (
		<section className="z-10 top-2 fixed flex gap-4 items-center">
			<section className="flex gap-2">
				<label
					onClick={() => handleShirtColor('preto')}
					className="px-3 py-2 rounded text-slate-50 bg-slate-700 flex gap-1 justify-center items-center cursor-pointer"
					htmlFor="black"
				>
					<span>Preto</span>
					<input
						className="accent-slate-500"
						type="radio"
						name="shirtColor"
						id="black"
					/>
				</label>

				<label
					onClick={() => handleShirtColor('branco')}
					className="px-3 py-2 rounded text-slate-50 bg-slate-700 flex gap-1 justify-center items-center cursor-pointer"
					htmlFor="white"
				>
					<span>Branco</span>
					<input
						className="accent-slate-500"
						type="radio"
						name="shirtColor"
						id="white"
					/>
				</label>
			</section>

			<input
				onChange={(e) => handleDesignColor(e.target.value)}
				type="color"
				name="color"
				id="color"
			/>
		</section>
	)
}
