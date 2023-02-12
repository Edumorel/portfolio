import react from '../../public/skills/react.png'
import node from '../../public/skills/node.png'
import webpack from '../../public/skills/webpack.png'
import js from '../../public/skills/js.png'

export const projects = [
	{
		title: 'Angelas Questions',
		image: 'angelasquestions/angelas_1.png',
		description: `Una página en la que podías comprar tus entradas para una obra. Respondías unas preguntas y si contestabas bien te enviaban un código para comprarlas.`,
		link: 'https://angelasquestions.co.uk/',
		tech: [react, node],
		color: '255, 255, 255',
	},
	{
		title: 'Muddled Marauders',
		image: 'muddledmarauders/cover.png',
		description: `Una web informativa que cuenta con un video interactivo y algunas páginas con efectos de glitch
		`,
		tech: [webpack, js],
		link: 'https://muddledmarauders.vercel.app/',
		color: '210, 63, 138',
	},
]
