import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const APIS = {
	coingecko: {
		baseUrl: 'https://api.coingecko.com/api/v3',
		header: {
			accept: 'application/json',
			'x-cg-demo-api-key': 'CG-mH4cERDndy92fwRYm2MsHqJv	',
		},
	},
	coinranke: {
		baseUrl: 'https://coinranking1.p.rapidapi.com',
		header: {
			'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
			'x-rapidapi-key': '19f52f8ce7msh869e47b46a27db0p186d38jsn4f8679603bb5',
		},
	},
	newsdata: {
		baseUrl: 'https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily',
		header: {
			'x-rapidapi-key': '19f52f8ce7msh869e47b46a27db0p186d38jsn4f8679603bb5',
			'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
		},
	},
}
