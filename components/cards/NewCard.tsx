import { ExternalLink } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

interface INew {
	url: string
	title: string
	description: string
	thumbnail: string
	createdAt: string
}
const nev = {
	url: 'https://cryptodaily.co.uk/2025/05/lightchain-ai-triggers-retail-frenzy-while-chainlink-and-dogecoin-see-mixed-sentiment-across-exchanges',
	title:
		'Lightchain AI Triggers Retail Frenzy While Chainlink and Dogecoin See Mixed Sentiment Across Exchanges',
	description:
		'As sentiment wavers around Chainlink and Dogecoin, Lightchain AI is quietly sparking a retail frenzy that’s gaining speed by the day.',
	thumbnail: 'https://images.cryptodaily.co.uk/space/Nmqomh1VpkoUM4Fs6gmA3zgfbtMC5yCpJTslh7sI.jpg',
	createdAt: 'Wed, 28 May 2025 13:35:13 +0100',
}

const NewCard = ({ url, title, description, thumbnail, createdAt }: INew) => {
	return (
		<div className='flex flex-col justify-center items-center'>
			<div className=' rounded-lg shadow-lg overflow-hidden max-w-lg w-full'>
				<img
					src={thumbnail}
					alt='Mountain'
					className='w-full h-64 object-cover'
				/>
				<div className='p-6'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2 line-clamp-2'>{title}</h2>
					<p className='text-gray-700 leading-tight mb-4 line-clamp-2'>{description}</p>
					<div className='flex justify-between items-center '> 
            <span className='text-gray-800 font-light self-start'>{createdAt}</span>
						<Link href={url} className='text-gray-600 cursor-pointer'><ExternalLink size={20} /></Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default NewCard
