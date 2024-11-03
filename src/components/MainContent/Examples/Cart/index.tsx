import s from './Cart.module.css'

type PropsType = {
	textContent: string
	img: string
}

export const Cart: React.FC<PropsType> = ({ textContent, img }) => {
	return (
		<div className={s.imgContainer}>
			<img src={img} alt='ноутбук' />
			<div className={s.name}> {textContent}</div>
		</div>
	)
}
