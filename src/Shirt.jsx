import { useState } from 'react'
import Options from './Options'
import Name from './Name'
import Design from './Design'

export default function Shirt() {
	const [shirtColor, setShirtColor] = useState('branco')
	const [designColor, setDesignColor] = useState('#000')

	return (
		<>
			<Options
				handleShirtColor={setShirtColor}
				handleDesignColor={setDesignColor}
			/>

			<div className="flex flex-row gap-1 relative">
				<div className="relative flex justify-center w-fit">
					<Design
						className="absolute h-fit mt-[20%] w-[35%]"
						color={designColor}
					/>
					<img src={`./src/assets/costas-${shirtColor}.jpg`} />
				</div>

				<div className="relative flex justify-center w-fit">
					<Name className="absolute mt-[30%] w-[15%]" color={designColor} />

					<img src={`./src/assets/frente-${shirtColor}.jpg`} />
				</div>
			</div>
		</>
	)
}
