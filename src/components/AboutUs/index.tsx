import React, { forwardRef } from 'react'
import styles from './AboutUs.module.css'

interface AboutUsProps {
	className?: string
}

export const AboutUs = forwardRef<HTMLDivElement, AboutUsProps>(
	(props, ref) => {
		console.log(ref)
		return (
			<div ref={ref} className={styles.aboutUs}>
				<div className={styles.textContainer}>
					<div className={styles.aboutUsBlock}>
						<h3 className={styles.blockTitle}>
							Гравировка клавиатур любой сложности
						</h3>
						<p className={styles.blockText}>
							<ul>
								<li>
									Мы предлагаем услуги лазерной гравировки клавиатур с высокой
									точностью и четкостью.
								</li>
								<li>
									Работы выполняются с учетом ваших пожеланий, любых символов и
									языков.
								</li>
								<li>
									Независимо от сложности, вы получите профессиональный
									результат, который преобразит внешний вид вашей клавиатуры.
								</li>
							</ul>
						</p>
					</div>
					<div className={styles.aboutUsBlock}>
						<h3 className={styles.blockTitle}>
							Гравировка на любых поверхностях
						</h3>
						<p className={styles.blockText}>
							<ul>
								<li>
									{' '}
									Наши возможности по гравировке не ограничены только
									клавиатурами — мы можем нанести изображение практически на
									любую поверхность. Будь то металл, пластик, стекло или дерево,
									наша команда выполнит гравировку качественно и быстро,
									добавляя уникальность каждому предмету.
								</li>
							</ul>
						</p>
					</div>
					<div className={styles.aboutUsBlock}>
						<h3 className={styles.blockTitle}>
							Индивидуальные изображения и символы
						</h3>
						<p className={styles.blockText}>
							<ul>
								<li>
									Мы воплотим в жизнь любые ваши идеи! От логотипов и сложных
									узоров до персональных надписей — наши специалисты создадут
									уникальный дизайн, который подчеркнет вашу индивидуальность.
									Каждый проект для нас — это искусство, и мы с радостью делаем
									вашу вещь действительно особенной.
								</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		)
	}
)
