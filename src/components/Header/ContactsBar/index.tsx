import React from 'react'
import s from './ContactsBar.module.css'

export const ContactsBar = () => {
	return (
		<div className={s.ContactsBarContainer}>
			<div className={s.infoContainer}>
				<div className={s.phone}>+7 916 064 43 92</div>
				<div className={s.address}>ул Пушкина дом колотушкина</div>
			</div>
			<div>
				<span>мы в ВК</span>
			</div>
		</div>
	)
}
