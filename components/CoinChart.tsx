'use client'
import { APIS } from '@/lib/utils'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import TimePeriod from './TimePeriod'
import LineChart from './LineChart'
import millify from 'millify'
import Loader from './Loader'

const CoinChart = ({ id, coin }: { id: string; coin: any }) => {
	const [timeperiod, setTimeperiod] = useState('7d')
	const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y']
	const {
		data: coinHistory,
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ['coinHistory'],
		queryFn: async () => {
			const response = await axios({
				method: 'GET',
				baseURL: `${APIS.coinranke.baseUrl}/coin/${id}/history?timePeriod=${timeperiod}`,
				headers: APIS.coinranke.header,
			})
			return response.data.data
		},
	})
	useEffect(() => {
		refetch()
  }, [timeperiod])
  if (isLoading) return <Loader /> 
  
	return (
		<div>
			<div className='flex  w-full items-center jutify-between mt-10'>
				<h1 className='text-blue-600 flex-1 text-2xl lg:text-4xl font-bold '>{coin?.name} Price Chart</h1>
				<div className='flex flex-1 justify-end items-center gap-5'>
					<p className='font-semibold  text-slate-800 text-base'>
						<span className='mr-3'>Change: {coinHistory.change}% </span>
						Current {coin?.name} Price:{millify(Number(coin?.coin?.price))}
					</p>
					<div className=''>
						<TimePeriod times={time} onSelect={time => setTimeperiod(time)} />
					</div>
				</div>
			</div>
			<LineChart coinHistory={coinHistory.history} />
		</div>
	)
}

export default CoinChart
