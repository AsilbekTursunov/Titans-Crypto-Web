import { getNews } from '@/server'
import React, { use } from 'react'
import NewCard from './NewCard'

const Newslist = ({ news }: { news: INew[] }) => {
	return (
		<div className='container mx-auto mt-10'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{news.slice(1, 12).map(item => (
					<NewCard key={item.createdAt} {...item} />
				))}
			</div>
		</div>
	)
}

export default Newslist
