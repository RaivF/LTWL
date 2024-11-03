import React from 'react'
import styles from './AboutUs.module.css'

export const AboutUs = () => {
	return (
		<div className={styles.aboutUs}>
			<div className={styles.textContainer}>
				<div className={styles.aboutUsBlock}>
					<h3 className={styles.blockTitle}>
						Гравировка клавиатур любой сложности
					</h3>
					<p className={styles.blockText}>
						Мы предлагаем услуги лазерной гравировки клавиатур с высокой
						точностью и четкостью. Работы выполняются с учетом ваших пожеланий,
						любых символов и языков. Независимо от сложности, вы получите
						профессиональный результат, который преобразит внешний вид вашей
						клавиатуры.
					</p>
				</div>
				<div className={styles.aboutUsBlock}>
					<h3 className={styles.blockTitle}>
						Гравировка на любых поверхностях
					</h3>
					<p className={styles.blockText}>
						Наши возможности по гравировке не ограничены только клавиатурами —
						мы можем нанести изображение практически на любую поверхность. Будь
						то металл, пластик, стекло или дерево, наша команда выполнит
						гравировку качественно и быстро, добавляя уникальность каждому
						предмету.
					</p>
				</div>
				<div className={styles.aboutUsBlock}>
					<h3 className={styles.blockTitle}>
						Индивидуальные изображения и символы
					</h3>
					<p className={styles.blockText}>
						Мы воплотим в жизнь любые ваши идеи! От логотипов и сложных узоров
						до персональных надписей — наши специалисты создадут уникальный
						дизайн, который подчеркнет вашу индивидуальность. Каждый проект для
						нас — это искусство, и мы с радостью делаем вашу вещь действительно
						особенной.
					</p>
				</div>
			</div>
		</div>
	)
}
