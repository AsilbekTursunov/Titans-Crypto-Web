import NewCard from '@/components/cards/NewCard'
import { getNews } from '@/server' 
import React, { use } from 'react'
 

const News = () => {
	const news: INew[] = use(getNews())

	return (
		<div className='container mx-auto mt-10'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{news.map(item => (
					<NewCard key={item.createdAt} {...item} />
				))}
			</div>
		</div>
	)
}

export default News
