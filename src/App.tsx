import { useRef } from 'react'
import './App.css'
import { AboutUs } from './components/AboutUs'
import { ContactsBar } from './components/Header/ContactsBar'
import { LogoAndMenu } from './components/Header/LogoAndMenu'
import { Examples } from './components/MainContent/Examples'

import { LaserContainer } from './components/MainContent/LaserContainer'
import YmapsComponent from './components/Ymaps'

function App() {
	// Создаем реф для секции "О нас"
	const aboutRef = useRef<HTMLDivElement | null>(null)
	console.log(aboutRef)

	// Функция прокрутки к "О нас"
	const scrollToAbout = () => {
		if (aboutRef.current) {
			aboutRef.current.scrollIntoView({ behavior: 'smooth' })
		}
	}
	return (
		<section>
			<ContactsBar />
			<LogoAndMenu onAboutClick={scrollToAbout} />
			<LaserContainer />
			<Examples />
			<AboutUs ref={aboutRef} />
			<YmapsComponent />
		</section>
	)
}
export default App
