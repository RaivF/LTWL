import React from 'react'
import s from './logoAndMenu.module.css'
type PropsType = {
	onAboutClick: () => void
}

export const LogoAndMenu: React.FC<PropsType> = ({ onAboutClick }) => {
	return (
		<div className={s.MainLogoContainer}>
			<div className={s.logoContainer}>
				<div className={s.logo}>
					<span>Lap</span>
					<span style={{ color: 'red' }}>Top</span>
					<span> Works!</span>
				</div>
			</div>
			<div className={s.menu}>
				<span
					onClick={() => {
						onAboutClick()
					}}
				>
					О нас
				</span>
				<span className={s.contactSpan}>
					Наши контакты
					<div className={s.contactContainer}>
						<span>
							<span style={{ color: 'red' }}>тел.</span> +7 (8422) 99-79-49
						</span>
						<span>
							{' '}
							<span style={{ color: 'red' }}>email</span>
							LapTopWorks@yandex.ru
						</span>
					</div>
				</span>

				<a href='https://www.avito.ru/ulyanovsk/predlozheniya_uslug/lazernaya_gravirovka_klaviatury_macbook_2707081007#open-reviews-list'>
					Отзывы
				</a>
			</div>
		</div>
	)
}
