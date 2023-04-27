import { useState } from 'react'
import Shirt from './Shirt'

export default function App() {
	const [shirtColor, setShirtColor] = useState('branco')

	return (
		<main className="h-screen grid place-items-center p-10">
			<Shirt shirtColor={shirtColor} />
		</main>
	)
}
