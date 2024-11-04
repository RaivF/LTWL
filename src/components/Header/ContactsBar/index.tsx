import React from 'react'
import s from './ContactsBar.module.css'

export const ContactsBar = () => {
	return (
		<div className={s.ContactsBarContainer}>
			<div className={s.infoContainer}>
				<div className={s.phone}>+7 (8422) 99-79-49</div>
				<div className={s.address}>ул. Гончарова 42</div>
			</div>
			<div>
				<a href='https://vk.com/laptopworks73'>мы в ВК</a>
			</div>
		</div>
	)
}
