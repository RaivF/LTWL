import React from 'react'
import s from './logoAndMenu.module.css'

export const LogoAndMenu = () => {
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
				<span>О нас</span>
				<span>наши контакты</span>
				<span>отзывы</span>
			</div>
		</div>
	)
}
