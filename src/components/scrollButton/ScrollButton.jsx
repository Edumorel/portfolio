import { useEffect, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import styles from './ScrollButton.module.css'

const ScrollButton = ({ size = 3 }) => {
	const [active, setActive] = useState(0)
	const [timer, setTimer] = useState(null)

	useEffect(() => {
		const time = active < size ? 80 : 2000

		if (!timer) {
			setTimer(
				setTimeout(() => {
					setActive(active < size ? active + 1 : 0)
					setTimer(null)
				}, time)
			)
		}
	}, [active])

	return (
		<div className={styles.scrollContainer}>
			<a href='#skills'>
				{[...new Array(size)].map((it, i) => (
					<IoIosArrowDown
						className={`${styles.scrollIcon} ${active == i && styles.active}`}
						key={`scroll-${i}`}
					/>
				))}
			</a>
		</div>
	)
}

export default ScrollButton
