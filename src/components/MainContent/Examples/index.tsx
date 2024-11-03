import { Cart } from './Cart'
import s from './Examples.module.css'
export const Examples = () => {
	return (
		<div className={s.MainDescriptionContainer}>
			<div className={s.text}>примеры гравировки</div>
			<div className={s.cartsContainer}>
				<Cart textContent={'MacBook Pro'} img='/1.jpg' />
				<Cart textContent={'Asus'} img='/2.jpg' />
				<Cart textContent={'MacBook'} img='/3.jpg' />
				<Cart textContent={'MacBook Air'} img='/4.jpg' />
				<Cart textContent={'HP'} img='/5.jpg' />
				<Cart textContent={'MacBook'} img='/6.jpg' />
				<Cart textContent={'гравировка на крышках'} img='/7.jpg' />
				<Cart textContent={'гравировка на телефонах'} img='/8.jpg' />
			</div>
		</div>
	)
}
