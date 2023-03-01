import react from '../../public/skills/react.png'
import node from '../../public/skills/node.png'
import webpack from '../../public/skills/webpack.png'
import js from '../../public/skills/js.png'

export const projects = [
	{
		title: 'Angelas Questions',
		image: 'angelasquestions/angelas_1.png',
		description: `A page where you could buy your tickets for a play. You answer some questions and if you answered correctly they sent you a code to buy them.`,
		link: 'https://angelasquestions.co.uk/',
		tech: [react, node],
		color: '255, 255, 255',
	},
	{
		title: 'Muddled Marauders',
		image: 'muddledmarauders/cover.png',
		description: `An informative website that has an interactive video and some pages with glitch effects
		`,
		tech: [webpack, js],
		link: 'https://muddledmarauders.vercel.app/',
		color: '210, 63, 138',
	},
]
