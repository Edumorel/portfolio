import Project from '../../components/project/Project'
import { projects } from '../../utils/projects'

import styles from './ListOfProjects.module.css'

const ListOfProjects = () => {
	return (
		<div className={styles.container}>
			{projects.map((item) => (
				<Project project={item} key={`project-${item.title}`} />
			))}
		</div>
	)
}

export default ListOfProjects
