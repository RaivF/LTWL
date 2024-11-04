import { Map, Placemark, YMaps } from 'react-yandex-maps'
import s from './Ymaps.module.css'

function YmapsComponent() {
	return (
		<div className={s.mapMainContainer}>
			<h2>мы находимся по адресу:</h2>
			<h3>ул. Гончарова 42.</h3>
			<h3>вход со стороны ул. Дмитрия Ульянова</h3>
			<YMaps>
				<div className={s.YmapContainer}>
					<Map
						width='100%'
						height='100%'
						defaultState={{
							center: [54.319769, 48.400612],
							zoom: 15,
						}}
					>
						<Placemark geometry={[54.319769, 48.400612]} />
					</Map>
				</div>
			</YMaps>
		</div>
	)
}
export default YmapsComponent
