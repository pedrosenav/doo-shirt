export default function Shirt({ shirtColor }) {
	return (
		<div className="flex flex-row gap-1">
			<div>
				<img src="./src/assets/estampa.svg" className="brightness-0" />
				<img src={`./src/assets/costas-${shirtColor}.jpg`} />
			</div>
			<div>
				<img src={`./src/assets/frente-${shirtColor}.jpg`} />
			</div>
		</div>
	)
}
