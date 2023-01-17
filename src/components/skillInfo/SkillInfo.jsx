import styles from './SkillInfo.module.css'

const SkillInfo = ({ skill = {} }) => {
	return (
		<div className={`${styles.container} ${styles.visible}`}>
			<h4 style={{ color: skill.color }} className={styles.title}>
				{skill.name}
			</h4>

			<p className={styles.description}>{skill.description}</p>
		</div>
	)
}

export default SkillInfo
