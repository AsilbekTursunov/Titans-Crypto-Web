import axios from 'axios'

const axios$ = axios.create({
	baseURL: 'https://api.coingecko.com/api/v3',
	headers: {
		accept: 'application/json',
		'x-cg-demo-api-key': 'CG-mH4cERDndy92fwRYm2MsHqJv	',
	},
})

export default axios$
