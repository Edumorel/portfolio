import { useEffect, useRef, useState } from 'react'
import styles from './SkillButton.module.css'

const SkillButton = ({
	skill = {},
	index = 0,
	diameter = 500,
	size,
	width,
	selected = false,
	setSelected,
}) => {
	const radius = (diameter - width) / 2
	const angle = (2 * Math.PI) / size

	const x = Math.sin(-angle * index + Math.PI) * radius
	const y = Math.cos(angle * index + Math.PI) * radius

	const [visible, setVisible] = useState(false)

	useEffect(() => {
		setTimeout(() => {
			setVisible(true)
		}, 50 * index)
	}, [])

	return (
		<div
			className={`${styles.container} ${visible && styles.visible}`}
			style={{
				left: `${x + radius}px`,
				top: `${y + radius}px`,
				width: width,
				height: width,
			}}
		>
			<div className={styles.imageContainer}>
				<img
					src={`/skills/${skill.image}`}
					className={`${styles.image} ${selected && styles.active}`}
					onMouseDown={() => setSelected(index)}
				/>
				<span className={styles.skillName}>{skill.name}</span>
			</div>
		</div>
	)
}

export default SkillButton
