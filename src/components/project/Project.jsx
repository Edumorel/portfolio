import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef } from 'react'
import useShowElement from '../../hooks/useShowElement'
import styles from './Project.module.css'

const Project = ({ project, delay }) => {
	const containerStyle = {}
	const ref = useRef(null)
	const shown = useShowElement(ref)

	useEffect(() => {
		const elementStyle = ref.current.style
		elementStyle.setProperty('--colorShadow', project.color)
		elementStyle.setProperty('--delay', delay * 0.1 + 's')
	}, [delay, project.color])

	const { techImage } = styles

	return (
		<figure
			className={`${styles.container} ${shown && styles.visible}`}
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

				<section className={styles.links}>
					<div className={styles.linksContent}>
						{project.link && (
							<a
								href={project.link}
								target='_blank'
								rel='noreferrer'
								className={styles.linksButton}
							>
								Visit web
							</a>
						)}

						{project.url && (
							<Link
								href={`/projects/${project.url}`}
								className={styles.linksButton}
							>
								Know more
							</Link>
						)}
					</div>
				</section>
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
		</figure>
	)
}

export default Project
