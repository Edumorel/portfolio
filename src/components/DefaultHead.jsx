import Head from 'next/head'

const DefaultHead = ({ title = 'Edumorel', children }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name='description' content='Portfolio de Eduardo Caparros' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<link rel='icon' href='/favicon.png' />
			{children}
		</Head>
	)
}

export default DefaultHead
