import React from 'react'
import s from './laserContainer.module.css'

export const LaserContainer = () => {
	return (
		<div className={s.MainContainer}>
			<div className={s.laserContainer}>
				<video autoPlay muted loop>
					<source src='/laser.mp4' type='video/mp4' />
				</video>
			</div>
		</div>
	)
}
