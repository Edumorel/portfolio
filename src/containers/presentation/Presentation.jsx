import Image from 'next/image'
import ScrollButton from '../../components/scrollButton/ScrollButton'
import styles from './Presentation.module.css'
import me from '../../../public/me.jpg'
import { useRef } from 'react'
import useShowElement from '../../hooks/useShowElement'

const Presentation = () => {
	const image = useRef(null)
	const description = useRef(null)
	const shownImage = useShowElement(image)
	const shownDescription = useShowElement(description)

	return (
		<section className={`section ${styles.section}`}>
			<div className={`section-content ${styles.container}`}>
				<section
					className={`${styles.descriptionSection} ${
						shownDescription && styles.visible
					}`}
					ref={description}
				>
					<h1 className={styles.title}>
						<span className={styles.capital}>E</span>duardo{' '}
						<span className={styles.capital}>C</span>aparrós
					</h1>
					<h2 className={styles.subtitle}>
						I am a self-taught fullstack developer with a great passion for
						programming. I have had the opportunity to work in different
						projects both personal and for clients.
					</h2>
				</section>

				<section
					className={`${styles.imageSection} ${shownImage && styles.visible}`}
					ref={image}
				>
					<div className={styles.imageContainer}>
						<Image
							src={me}
							alt={'Foto de edumorel'}
							className={styles.image}
							priority
						/>
					</div>
				</section>

				<ScrollButton />
			</div>
		</section>
	)
}

export default Presentation
