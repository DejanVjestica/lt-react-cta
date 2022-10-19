import './App.scss'

import { Cta } from './components/Cta/Cta'

export const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Lighting talks</h1>
			</header>
			<main className="App-main">
				<Cta />
			</main>
		</div>
	)
}
