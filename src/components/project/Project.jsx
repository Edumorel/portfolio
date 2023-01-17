import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import styles from './Project.module.css'

const Project = ({ project }) => {
	const containerStyle = {}
	const ref = useRef(null)

	useEffect(() => {
		ref.current.style.setProperty('--colorShadow', project.color)
	}, [])

	const { techImage } = styles

	return (
		<Link
			href={`/projects/${project.url}`}
			className={styles.container}
			style={containerStyle}
			ref={ref}
		>
			<div className={styles.imageContainer}>
				<Image
					src={`/projects/${project.image}`}
					alt={`Imagen de ${project.title}`}
					width={1080}
					height={720}
					className={styles.image}
					priority
				/>
			</div>

			<div className={styles.content}>
				<section>
					<h3 className={styles.title}>{project.title}</h3>
					<p className={styles.description}>{project.description}</p>
				</section>

				<footer className={styles.tech}>
					{project.tech.map((item, i) => (
						<Image
							src={item}
							alt={`Imagen`}
							key={`project-text-${project.title}-${i}`}
							className={techImage}
						/>
					))}
				</footer>
			</div>
		</Link>
	)
}

export default Project
