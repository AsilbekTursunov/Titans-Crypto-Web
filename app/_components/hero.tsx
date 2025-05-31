import React from 'react'
import millify from 'millify'
interface IProps {
	total: number
	totalCoins: number
	totalMarkets: number
	totalExchanges: number
	totalMarketCap: string
	total24hVolume: string
}

const HeroSection = ({
	total,
	totalCoins,
	totalMarkets,
	totalExchanges,
	totalMarketCap,
	total24hVolume,
}: IProps) => {
	return (
		<div>
			<div className='container mx-auto mt-10'>
				<h1 className='text-4xl font-bold mb-5'>Global Crypto Stats</h1>
				<div className='grid grid-cols-2 md:grid-cols-2 gap-5 ml-3'>
					<div>
						<p className='text-base lg:text-xl font-normal mb-2 text-neutral-400'>Total Cryptocurrencies</p>
						<span className='text-2xl lg:text-4xl font-semibold text-neutral-900'>{total}</span>
					</div>
					<div>
						<p className='text-base lg:text-xl font-normal mb-2 text-neutral-400'>Total Exchanges</p>
						<span className='text-2xl lg:text-4xl font-semibold text-neutral-900'>{totalExchanges}</span>
					</div>
					<div>
						<p className='text-base lg:text-xl font-normal mb-2 text-neutral-400'>Total Market Cap</p>
            <span className='text-2xl lg:text-4xl font-semibold text-neutral-900'>{millify(Number(totalMarketCap))}</span>
					</div>
					<div>
						<p className='text-base lg:text-xl font-normal mb-2 text-neutral-400'>Total 24 Volume</p>
            <span className='text-2xl lg:text-4xl font-semibold text-neutral-900'>{millify(Number(total24hVolume))}</span>
					</div>
					<div>
						<p className='text-base lg:text-xl font-normal mb-2 text-neutral-400'>Total Market</p>
            <span className='text-2xl lg:text-4xl font-semibold text-neutral-900'>{millify(totalMarkets)}</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeroSection
