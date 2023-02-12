import Image from 'next/image'
import DefaultHead from '../src/components/DefaultHead'
import Footer from '../src/containers/footer/Footer'
import Presentation from '../src/containers/presentation/Presentation'
import ProjectsSection from '../src/containers/proyectsSection/ProjectsSection'
import SkillsSection from '../src/containers/skillsSection/SkillsSection'
import styles from '../styles/Home.module.css'
import background from '../public/background.jpg'

export default function Home() {
	return (
		<>
			<DefaultHead />
			<main>
				<Image
					src={background}
					alt='Fondo'
					className={styles.background}
					width={background.width}
					height={background.height}
					priority
				/>
				<Presentation />
				<SkillsSection />
				<ProjectsSection />
			</main>
			<Footer />
		</>
	)
}
