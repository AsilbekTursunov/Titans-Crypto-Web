interface ICoin {
	uuid: string
	symbol: string
	name: string
	color: string
	iconUrl: string
	marketCap: string
	price: string
	listedAt: number
	tier: number
	change: string
	rank: number
}

interface INew {
	url: string
	title: string
	description: string
	thumbnail: string
	createdAt: string
}

interface IExchange {
	id: string
	name: string
	year_established: number
	country: string
	description: string
	url: string
	image: string
	has_trading_incentive: false
	trust_score: number
	trust_score_rank: number
	trade_volume_24h_btc: number
	trade_volume_24h_btc_normalized: number
}
