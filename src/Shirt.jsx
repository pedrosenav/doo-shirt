import { useState } from 'react'
import Options from './Options'

export default function Shirt() {
	const [shirtColor, setShirtColor] = useState('branco')
	
	return (
		<>
			<Options handleShirtColor={setShirtColor} />
			<div className="flex flex-row gap-1 relative">
				<div className="relative flex justify-center w-fit">
					<img
						className="absolute mt-[20%] w-[35%]"
						src="./src/assets/estampa.png"
					/>
					<img src={`./src/assets/costas-${shirtColor}.jpg`} />
				</div>

				<div className="relative flex justify-center w-fit">
					<img
						className="absolute mt-[30%] w-[15%]"
						src="./src/assets/nome.svg"
					/>
					<img src={`./src/assets/frente-${shirtColor}.jpg`} />
				</div>
			</div>
		</>
	)
}
