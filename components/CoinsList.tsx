'use client'
import React from 'react'
import CoinCard from './cards/CoinCard'

const CoinsList = ({ coins }: { coins: ICoin[] }) => {
	return (
		<div className=' gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{coins?.map(item => (
				<CoinCard key={item.uuid} {...item} />
			))}
		</div>
	)
}

export default CoinsList
