import { useEffect, useRef, useState } from 'react'
import Skills from '../skills/Skills'

import { skillsData } from '../../utils/skills'

import styles from './SkillsSection.module.css'
import SkillInfo from '../../components/skillInfo/SkillInfo'
import useShowElement from '../../hooks/useShowElement'

const SkillsSection = () => {
	const [skill, setSkill] = useState(0)
	const section = useRef(null)
	const shown = useShowElement(section)

	return (
		<section className={`section`} id='skills' ref={section}>
			<div className={`section-content ${styles.content}`}>
				<header className={styles.header}>
					<h3 className={`section-title`}>Skills</h3>
				</header>

				{shown && (
					<section className={styles.skills}>
						<Skills
							skills={skillsData}
							selected={skill}
							setSelected={setSkill}
						/>
						<SkillInfo skill={skillsData[skill]} />
					</section>
				)}
			</div>
		</section>
	)
}

export default SkillsSection
