import millify from 'millify'
import Image from 'next/image'
import React from 'react'

const exchange = {
	id: 'mxc',
	name: 'MEXC',
	year_established: 2018,
	country: 'Seychelles',
	description:
		'Established in April 2018, MEXC is one of the world’s leading digital-asset trading platforms. The core team comes from world-class enterprises and financial companies with rich experience in blockchain and financial industries.',
	url: 'https://www.mexc.com/',
	image: 'https://coin-images.coingecko.com/markets/images/409/small/logo_new.png?1743600043',
	has_trading_incentive: false,
	trust_score: 9,
	trust_score_rank: 12,
	trade_volume_24h_btc: 41311.87698700802,
	trade_volume_24h_btc_normalized: 39672.64143906593,
}

const ExchangeCard = (item: IExchange) => {
	return (
		<div className='border border-neutral-200 rounded-lg hover:shadow-accent transition-all cursor-pointer'>
			<div className='flex gap-5 justify-start items-center p-4 border-b border-b-neutral-200'>
				<Image
					src={item.image}
					alt={item.name}
					width={100}
					height={100}
					className='size-14 rounded-md'
				/>
				<h3 className='font-medium text-xl text-neutral-800 capitalize'>{item.name}</h3>
			</div>
			<div className='py-2 px-4'>
				<div className='text-gray-700 leading-tight mb-4 line-clamp-2'>{item.description}</div>
				<div className='flex justify-between items-center text-lg'>
					<p>Trade volume 24h (btc)</p>
					<span>{millify(Number(item.trade_volume_24h_btc))}</span>
				</div>
			</div>
		</div>
	)
}

export default ExchangeCard
