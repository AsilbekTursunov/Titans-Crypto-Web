import axios from 'axios'
import React, { use } from 'react'
import Navbar from './_components/navbar'
import HeroSection from './_components/hero'
import CoinsList from '@/components/CoinsList'
import { APIS } from '../lib/utils'
import { getCoins, getNews } from '@/server'
import Newslist from '@/components/cards/Newslist'

const HomePage = () => {
	const coins = use(getCoins())
	const news = use(getNews(10))

	return (
		<div className=''>
			<HeroSection {...coins?.stats} />
			<div className='mt-10 mb-14 container mx-auto'>
				<h1 className='text-2xl lg:text-4xl mb-4 font-bold text-slate-900'>Top Cryptocurrencies</h1>
				<CoinsList coins={coins.coins} />
			</div>
			<div className='mt-10 mb-14 container mx-auto'>
				<h1 className='text-2xl lg:text-4xl mb-4 font-bold text-slate-900'>Latest News</h1>
				<Newslist news={news} />
			</div>
		</div>
	)
}

export default HomePage
