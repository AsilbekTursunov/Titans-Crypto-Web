import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: ['cdn.coinranking.com'],
		remotePatterns: [
			{
				hostname: 'cryptocurrency-news2.p.rapidapi.com',
				protocol: 'https',
			},
			{
				hostname: 'coin-images.coingecko.com',
				protocol: 'https',
			},
			{
				hostname: 'images.cryptodaily.co.uk',
				protocol: 'https',
			},
		],
	},
}

export default nextConfig
