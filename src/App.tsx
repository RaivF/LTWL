import './App.css'
import { ContactsBar } from './components/Header/ContactsBar'
import { LogoAndMenu } from './components/Header/LogoAndMenu'
import { Examples } from './components/MainContent/Examples'

import { LaserContainer } from './components/MainContent/LaserContainer'
import YmapsComponent from './components/Ymaps'

function App() {
	return (
		<section>
			<ContactsBar />
			<LogoAndMenu />
			<LaserContainer />
			<Examples />
			<YmapsComponent />
		</section>
	)
}
export default App