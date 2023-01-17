import DefaultHead from '../src/components/DefaultHead'
import Footer from '../src/containers/footer/Footer'
import Presentation from '../src/containers/presentation/Presentation'
import ProjectsSection from '../src/containers/proyectsSection/ProjectsSection'
import SkillsSection from '../src/containers/skillsSection/SkillsSection'

export default function Home() {
	return (
		<>
			<DefaultHead />
			<main>
				<Presentation />
				<SkillsSection />
				<ProjectsSection />
			</main>
			<Footer />
		</>
	)
}
