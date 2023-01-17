import { useEffect, useRef, useState } from 'react'
import SkillButton from '../../components/skillButton/SkillButton'
import styles from './Skills.module.css'

const Skills = ({ skills = [], selected, setSelected }) => {
	const skillsLength = skills.length

	const circle = useRef(null)
	const [width, setWidth] = useState()
	const [skillWidth, setSkillWidth] = useState()

	const resize = () => {
		const windowWidth = innerWidth * 0.9
		const newWidth = windowWidth < 500 ? windowWidth : 500
		setWidth(newWidth)

		const newSkillWidth = newWidth / (skillsLength / 2 + 1)
		setSkillWidth(newSkillWidth < 100 ? newSkillWidth : 100)
	}

	useEffect(() => {
		window.addEventListener('resize', resize)
		resize()
	}, [])

	return (
		<div
			className={styles.container}
			ref={circle}
			style={{ width: width, height: width }}
		>
			{skills.map((item, i) => (
				<SkillButton
					skill={item}
					key={item.name}
					index={i}
					diameter={width}
					width={skillWidth}
					size={skillsLength}
					selected={selected == i}
					setSelected={setSelected}
				/>
			))}
		</div>
	)
}

export default Skills
