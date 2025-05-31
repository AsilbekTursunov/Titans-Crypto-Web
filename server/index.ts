import { APIS } from '@/lib/utils'
import axios from 'axios'

export const getCoins = async (limit?: number) => {
	const response = await axios({
		method: 'GET',
		baseURL: `${APIS.coinranke.baseUrl}/coins?limit=${limit || 12}`,
		headers: APIS.coinranke.header,
	})
	return response.data.data
}

export const getNews = async (limit?: number) => {
	const response = await axios({
		method: 'GET',
		baseURL: `${APIS.newsdata.baseUrl}`,
		headers: APIS.newsdata.header,
	})
	return response.data.data
}

export const getExchanges = async (limit?: number) => {
	const response = await axios({
		method: 'GET',
		baseURL: `${APIS.coingecko.baseUrl}/exchanges?per_page=${limit ? limit : 12}`,
		headers: APIS.coingecko.header,
	})
	return response.data
}
export const getCoin = async (id: string) => {
	const response = await axios({
		method: 'GET',
		baseURL: `${APIS.coinranke.baseUrl}/coin/${id}`,
		headers: APIS.coinranke.header,
	})
	return response.data.data
}

export const getCoinHistory = async (coinId: string, timeperiod: string) => {
	const response = await axios({
		method: 'GET',
		baseURL: `${APIS.coinranke.baseUrl}/coin/${coinId}/history?timePeriod=${timeperiod}`,
		headers: APIS.coinranke.header,
	})
	return response.data.data
}
