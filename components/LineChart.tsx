'use client'
import React from 'react'
import { Chart as ChartJs, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'

import { Line } from 'react-chartjs-2'

ChartJs.register(CategoryScale, LinearScale, PointElement, LineElement)
interface IProps {
	coinHistory: {price:string, timestamp:number}[] 
}

const LineChart = ({ coinHistory }: IProps) => {
	const coinPrice = []
	const coinTimestamp = []

	for (let i = 0; i < coinHistory?.length; i += 1) {
		coinPrice.push(coinHistory[i].price)
	}

	for (let i = 0; i < coinHistory?.length; i += 1) {
		coinTimestamp.push(new Date(coinHistory[i].timestamp).toLocaleDateString())
	}
	const data = {
		labels: coinTimestamp,
		datasets: [
			{
				label: 'Price In USD',
				data: coinPrice,
				fill: false,
				backgroundColor: '#0071bd',
				borderColor: '#0071bd',
			},
		],
	}

	const options = {
		scale: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
	}
	return (
		<div className='border mt-10 mb-10'>
			<Line data={data} />
		</div>
	)
}

export default LineChart
