import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h3 className={styles.title}>Contactame</h3>
			<section className={styles.socialContainer}>
				<svg width={0} height={0}>
					<defs>
						<linearGradient id='insta' x1='100%' y1='0%' x2='20%' y2='100%'>
							<stop offset='0%' stopColor='#5459ce' />
							<stop offset='50%' stopColor='#b8348f'></stop>
							<stop offset='70%' stopColor='#ef4c4a'></stop>
							<stop offset='100%' stopColor='#fed171' />
						</linearGradient>
					</defs>
				</svg>

				<a
					href='https://www.instagram.com/eduardo_caparros/'
					target='_blank'
					rel='noreferrer'
				>
					<AiFillInstagram className={`${styles.socialLink} ${styles.insta}`} />
				</a>
				<a href='https://github.com/Edumorel' target='_blank' rel='noreferrer'>
					<AiFillGithub className={`${styles.socialLink} ${styles.github}`} />
				</a>
				<a
					href='https://www.linkedin.com/in/eduardo-caparros-barcelo-ba12a3238/'
					target='_blank'
					rel='noreferrer'
				>
					<AiFillLinkedin
						className={`${styles.socialLink} ${styles.linkedin}`}
					/>
				</a>
			</section>
		</footer>
	)
}

export default Footer
