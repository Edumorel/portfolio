import ListOfProjects from '../listOfProjects/ListOfProjects'

const ProjectsSection = () => {
	return (
		<section className={`section`} style={{ paddingBottom: 100 }}>
			<div className={`section-content`}>
				<header>
					<h3 className={`section-title`}>Projects</h3>
				</header>

				<ListOfProjects />
			</div>
		</section>
	)
}

export default ProjectsSection
