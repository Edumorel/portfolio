import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<h3 className={styles.title}>Contactame</h3>
			<section className={styles.socialContainer}>
				<AiFillInstagram className={styles.socialLink} />
				<AiFillGithub className={styles.socialLink} />
				<AiFillLinkedin className={styles.socialLink} />
			</section>
		</footer>
	)
}

export default Footer
