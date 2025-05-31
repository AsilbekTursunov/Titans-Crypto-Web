'use client'
import CoinChart from '@/components/CoinChart'
import Loader from '@/components/Loader'
import HTMLReactParser from 'html-react-parser'
import { APIS } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {
	BadgeJapaneseYen,
	Ban,
	ChartLine,
	Check,
	CircleAlert,
	CircleDollarSign,
	DollarSign,
	Hash,
	TrendingUp,
	Trophy,
} from 'lucide-react'
import millify from 'millify'
import { useParams } from 'next/navigation'
import React from 'react'

const CoinDetails = () => {
	const { id } = useParams()

	const { data, isLoading } = useQuery({
		queryKey: ['coinDetails'],
		queryFn: async () => {
			const response = await axios({
				method: 'GET',
				baseURL: `${APIS.coinranke.baseUrl}/coin/${id}`,
				headers: APIS.coinranke.header,
			})
			return response.data.data
		},
	})
	if (isLoading) return <Loader />
	const stats = [
		{
			title: 'Price to USD',
			value: `$ ${data?.coin?.price && millify(data?.coin?.price)}`,
			icon: <DollarSign />,
		},
		{ title: 'Rank', value: data?.coin?.rank, icon: <Hash /> },
		{
			title: '24h Volume',
			value: `$ ${data?.coin?.['24hVolume'] && millify(data?.coin?.['24hVolume'])}`,
			icon: <TrendingUp />,
		},
		{
			title: 'Market Cap',
			value: `$ ${data?.coin?.marketCap && millify(data?.coin?.marketCap)}`,
			icon: <CircleDollarSign />,
		},
		{
			title: 'All-time-high(daily avg.)',
			value: `$ ${data?.coin?.allTimeHigh?.price && millify(data?.coin?.allTimeHigh?.price)}`,
			icon: <Trophy />,
		},
	]

	const genericStats = [
		{
			title: 'Number Of Markets',
			value: data?.coin?.numberOfMarkets,
			icon: <ChartLine />,
		},
		{
			title: 'Number Of Exchanges',
			value: data?.coin?.numberOfExchanges,
			icon: <BadgeJapaneseYen />,
		},
		{
			title: 'Aprroved Supply',
			value: data?.coin?.supply?.confirmed ? <Check /> : <Ban />,
			icon: <CircleAlert />,
		},
		{
			title: 'Total Supply',
			value: `$ ${data?.coin?.supply?.total && millify(data?.coin?.supply?.total)}`,
			icon: <CircleAlert />,
		},
		{
			title: 'Circulating Supply',
			value: `$ ${data?.coin?.supply?.circulating && millify(data?.coin?.supply?.circulating)}`,
			icon: <CircleAlert />,
		},
	]
	return (
		<div className='container mx-auto mt-10'>
			<div className='flex flex-col items-center gap-3 pb-10 border-b'>
				<h1 className='text-blue-600 text-2xl lg:text-4xl font-bold mb-4'>
					{data?.coin?.name} ({data?.coin?.symbol}) Price
				</h1>
				<p className='text-neutral-600 text-base font-medium'>
					{data?.coin?.name} live price in US Dollar (USD). View value statistics, market cap and
					supply.
				</p>
				<p className=''>{HTMLReactParser(data?.coin?.description)}</p>
			</div>
			<CoinChart id={id as string} coin={data.coin} />
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-2 mb-20'>
				<div>
					<h1 className='text-blue-600 text-2xl lg:text-4xl font-bold mb-4'>
						{data?.coin?.name} ({data?.coin?.symbol}) Price
					</h1>
					<p className='text-neutral-600 text-base font-medium'>
						An overview showing the statistics of Ethereum, such as the base and quote currency, the
						rank, and trading volume.
					</p>
					<div className='flex flex-col gap-4'>
						{stats.map(item => (
							<>
                <div className='flex items-center justify-between p-3 border-b border-b-neutral-400'>
                  <span className='gap-4 flex items-center'>
                    {item.icon}
                    <span className='text-lg text-neutral-700'>{item.title}</span>
                  </span>
                  <span className='text-lg font-semibold'>{item.value}</span>
                </div>
							</>
						))}
					</div>
				</div>
				<div>
					<h1 className='text-blue-600 text-2xl lg:text-4xl font-bold mb-4'>Other Stats Info</h1>
					<p className='text-neutral-600 text-base font-medium'>
						An overview showing the statistics of Ethereum, such as the base and quote currency, the
						rank, and trading volume.
          </p>
          <div className='flex flex-col gap-4'>
						{genericStats.map(item => (
							<>
                <div className='flex items-center justify-between p-3 border-b border-b-neutral-400'>
                  <span className='gap-4 flex items-center'>
                    {item.icon}
                    <span className='text-lg text-neutral-700'>{item.title}</span>
                  </span>
                  <span className='text-lg font-semibold'>{item.value}</span>
                </div>
							</>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default CoinDetails
