import Project from '../../components/project/Project'
import { projects } from '../../utils/projects'

import styles from './ListOfProjects.module.css'

const ListOfProjects = () => {
	return (
		<div className={styles.container}>
			{projects.map((item, i) => (
				<Project project={item} key={`project-${item.title}`} delay={i} />
			))}
		</div>
	)
}

export default ListOfProjects
