import Image from 'next/image'
import ScrollButton from '../../components/scrollButton/ScrollButton'
import styles from './Presentation.module.css'
import me from '../../../public/me.jpg'

const Presentation = () => {
	return (
		<section className={`section ${styles.section}`}>
			<div className={`section-content ${styles.container}`}>
				<section>
					<h1 className={styles.title}>
						<span className={styles.capital}>E</span>duardo{' '}
						<span className={styles.capital}>C</span>aparrós
					</h1>
					<h2 className={styles.subtitle}>
						Soy un programador fullstack autodidacta con una gran pasión por la
						programación. He tenido la oportunidad de trabajar en diferentes
						proyectos tanto personales como de clientes.
					</h2>
				</section>

				<section className={styles.imageSection}>
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
