import { useEffect, useState } from 'react'

const config = {
	root: null,
	rootMargin: '0px',
	threshold: 0.4,
}

const useShowElement = (ref) => {
	const [shown, setShown] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			const entry = entries[0]

			if (entry.isIntersecting && !shown) {
				setShown(true)
			}
		}, config)

		observer.observe(ref.current)
	}, [ref])

	return shown
}

export default useShowElement
