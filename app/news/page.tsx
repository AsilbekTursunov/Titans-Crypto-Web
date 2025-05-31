import NewCard from '@/components/cards/NewCard'
import { getNews } from '@/server' 
import React, { use } from 'react'

const newss = [
	{
		url: 'https://cryptodaily.co.uk/2025/05/el-salvador-expands-bitcoin-holdings-despite-imf-pressure',
		title: 'El Salvador Expands Bitcoin Holdings Despite IMF Pressure',
		description:
			'El Salvador has once again challenged the International Monetary Fund’s (IMF) stance on cryptocurrency acquisitions, making a fresh Bitcoin purchase shortly after concluding a key review tied to its $1.4 billion loan agreement.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/el%20salvador%20photo_2025-05-28%2018.59.53%20%281%29.jpeg',
		createdAt: 'Wed, 28 May 2025 14:36:41 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/solana-sol-investors-are-paying-close-attention-as-analysts-forecast-a-100x-growth-potential-for-ruvi-ai-ruvi',
		title:
			'Solana (SOL) Investors Are Paying Close Attention as Analysts Forecast a 100x Growth Potential for Ruvi AI (RUVI)',
		description:
			'Cryptocurrency investors are always on the lookout for the next major opportunity.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/ip0E9pB50XLcI5h4er4grbecjKMgn4QQTgCsyhoO.png',
		createdAt: 'Wed, 28 May 2025 16:34:47 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/wall-street-ponkes-presale-is-heating-up-with-talk-of-100x-debut-bull-run',
		title: 'Wall Street Ponke’s Presale is Heating Up, With Talk of 100x Debut Bull Run',
		description:
			'WPONKE blends meme coin energy with AI, education, and trader protection, with over $327K raised in its fast-moving presale.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/D0FaVtfA7yzn5otjkGsQlb9pP6QVdDtEuWBDj8hh.jpg',
		createdAt: 'Wed, 28 May 2025 15:00:36 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/cardano-price-prediction-time-for-ada-to-enter-top-5-again-viral-competitor-emerges',
		title: 'Cardano Price Prediction: Time for ADA to Enter Top 5 Again? Viral Competitor Emerges',
		description:
			'With the markets turning bullish, Cardano price predictions set the ADA coin up for viral gains. Unilabs Finance is also getting viral as it crosses $1M in collections.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/sSGh4ztqT4oVDeQKFKtxnNGpYmjBsdbm6gsU3LNb.jpg',
		createdAt: 'Wed, 28 May 2025 13:05:43 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/lightchain-ai-triggers-retail-frenzy-while-chainlink-and-dogecoin-see-mixed-sentiment-across-exchanges',
		title:
			'Lightchain AI Triggers Retail Frenzy While Chainlink and Dogecoin See Mixed Sentiment Across Exchanges',
		description:
			'As sentiment wavers around Chainlink and Dogecoin, Lightchain AI is quietly sparking a retail frenzy that’s gaining speed by the day.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/Nmqomh1VpkoUM4Fs6gmA3zgfbtMC5yCpJTslh7sI.jpg',
		createdAt: 'Wed, 28 May 2025 13:35:13 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/weed-launches-global-well-being-platform-powered-by-ai',
		title: 'Weed Launches Global Well-Being Platform Powered by AI',
		description: 'Weed Launches Global Well-Being Platform Powered by AI',
		thumbnail:
			'https://app.chainwire.org/storage/uploads/users/weed_AI_PR_cover_1748012938HuwyXARGVo.jpg',
		createdAt: 'Wed, 28 May 2025 16:03:55 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/wisdomtrees-spot-xrp-etf-application-enters-sec-evaluation-cycle',
		title: 'WisdomTree’s Spot XRP ETF Application Enters SEC Evaluation Cycle',
		description:
			'The U.S. Securities and Exchange Commission (SEC) has progressed WisdomTree’s application for a spot XRP exchange-traded fund (ETF) to a formal review stage, following the conclusion of the public comment period.',
		thumbnail: 'https://images.cryptodaily.co.uk/space/photo_2025-05-28%2018.52.23.jpeg',
		createdAt: 'Wed, 28 May 2025 14:29:15 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/best-crypto-to-buy-today-which-altcoin-can-rally-25000-like-xrp-in-2018',
		title: 'Best Crypto to Buy Today: Which Altcoin Can Rally 25,000% Like XRP in 2018?',
		description:
			'XRP price surged massively in 2018, giving early investors huge returns. Unilabs is now gaining traction as the best crypto to buy with the potential to surge like XRP.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/8EjTc6do8mEM3anvjBvSbIClcbr7O6imwVVVEN5p.png',
		createdAt: 'Wed, 28 May 2025 13:09:42 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/ethereum-price-prediction-2880-on-the-cards-after-eu-tariff-reversal',
		title: 'Ethereum Price Prediction: $2880 On The Cards After EU Tariff Reversal',
		description:
			'As Ethereum gears up for a new breakthrough, investors are eyeing Unilabs’ presale for immense growth potential. Why? Take a look at this article to find out!',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/HoD5vmEzvk2KkXIXRSRzSP1KM0rdsx23pLkf6sof.jpg',
		createdAt: 'Wed, 28 May 2025 12:27:33 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/everyones-talking-about-chainlink-again-but-lightchain-ai-is-where-the-real-buy-pressure-is-building',
		title:
			'Everyone’s Talking About Chainlink Again, But Lightchain AI Is Where the Real Buy Pressure Is Building',
		description:
			'Chainlink is making rounds in market discussions once more, gaining renewed visibility through social chatter and ecosystem updates.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/OGpaGjDJgl2zmlw8PMDkMQDOCeiTHfB0seCjZRHv.jpg',
		createdAt: 'Wed, 28 May 2025 13:32:26 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/shiba-inu-price-prediction-can-shib-hit-1-expert-backs-this-ai-asset-management-platform',
		title:
			'Shiba Inu Price Prediction: Can SHIB Hit $1? Expert Backs This AI Asset Management Platform',
		description:
			'Shiba Inu traders expect another rally from the OG memecoin, while experienced crypto whales pour thousands into Unilabs’ ongoing presale. Here’s why!',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/ELT1J7OGpmmxgfxwy5WplWCQPCzvSxKGkMZ5AYSi.jpg',
		createdAt: 'Wed, 28 May 2025 13:12:11 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/galxe-signs-cryptos-new-leaders-to-next-gen-community-accelerator',
		title: "Galxe Signs Crypto's New Leaders to Next-Gen Community Accelerator",
		description: "Galxe Signs Crypto's New Leaders to Next-Gen Community Accelerator",
		thumbnail:
			'https://app.chainwire.org/storage/uploads/users/starboard_banner_-_Aimee_edit_v4_1748425047qfXAjGSllW.jpg',
		createdAt: 'Wed, 28 May 2025 15:00:08 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/crypto-price-analysis-5-28-bitcoin-btc-ethereum-eth-solana-sol-cardano-ada-litecoin-ltc-injective-inj',
		title:
			'Crypto Price Analysis 5-28: BITCOIN: BTC, ETHEREUM: ETH, SOLANA: SOL, CARDANO: ADA, LITECOIN: LTC, INJECTIVE: INJ',
		description:
			'The crypto market registered a marginal drop over the past 24 hours as Bitcoin (BTC) slipped below $109,000. The flagship cryptocurrency has struggled to reclaim $110,000 after briefly crossing it on Wednesday. However, it lost momentum after reaching this level and fell to a low of $109,065 before rebounding to its current level. BTC is marginally down over the past 24 hours, trading around $108,819.',
		thumbnail: 'https://images.cryptodaily.co.uk/space/photo_2025-05-28%2018.51.32.jpeg',
		createdAt: 'Wed, 28 May 2025 14:26:19 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/while-bitcoin-dominates-capital-lightchain-ai-dominates-curiosity-in-the-presale-crowd',
		title:
			'While Bitcoin Dominates Capital, Lightchain AI Dominates Curiosity in the Presale Crowd',
		description:
			'Bitcoin continues to command the lion’s share of capital across the crypto market, but when it comes to investor curiosity—especially among presale participants—Lightchain AI is stealing the spotlight.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/WFxCQEtiYZjYBwFgk82hjMbJHy2GgtSIVKkjY8If.jpg',
		createdAt: 'Wed, 28 May 2025 13:22:56 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/polkadot-works-on-interoperability-meanwhile-lightchain-ai-presale-buyers-stack-up-before-it-hits-the-charts',
		title:
			'Polkadot Works on Interoperability, Meanwhile, Lightchain AI Presale Buyers Stack Up Before It Hits the Charts',
		description:
			'While Polkadot continues to make steady progress on cross-chain interoperability, a very different kind of momentum is building elsewhere—this time in the presale arena. Lightchain AI, a rising blockchain project focused on decentralized AI execution, is attracting a surge of early interest as it moves through its Bonus Round with tokens still priced at $0.007.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/OBVsXNpXIS4LIsEfiuWrz9swA3xwzJ9ArUZIFsEM.jpg',
		createdAt: 'Wed, 28 May 2025 12:24:00 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/while-trx-and-ltc-struggle-this-underrated-token-could-deliver-16000-gains-says-analyst',
		title:
			'While TRX and LTC Struggle, This Underrated Token Could Deliver 16,000% Gains, Says Analyst',
		description:
			'While TRX and LTC face stagnation, analysts spotlight an underrated token with the potential to surge by 16,000%, offering investors a promising alternative in the volatile crypto market.',
		thumbnail: 'https://images.cryptodaily.co.uk/space/28052025.png',
		createdAt: 'Wed, 28 May 2025 13:02:42 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/behavioural-prediction-mcp-launches-today-enabling-personalization-for-ai-agents',
		title: 'Behavioural Prediction MCP Launches Today: Enabling Personalization for AI-Agents',
		description:
			'Behavioural Prediction MCP Launches Today: Enabling Personalization for AI-Agents',
		thumbnail:
			'https://app.chainwire.org/storage/uploads/users/mcp-updated_1748277950drdfZrX7e3.jpg',
		createdAt: 'Wed, 28 May 2025 13:00:31 +0100',
	},
	{
		url: 'https://cryptodaily.co.uk/2025/05/did-not-turn-1000-to-10000-with-pepe-coin-in-2023-this-crypto-could-surge-even-higher',
		title:
			'Did Not Turn $1,000 to $10,000 with Pepe coin in 2023? This Crypto Could Surge Even Higher',
		description:
			'Missed turning $1K into $10K with Pepe coin in 2023? Unilabs may be your second chance. Its AI-managed crypto funds are now live with a presale opportunity.',
		thumbnail:
			'https://images.cryptodaily.co.uk/space/Vd7ajBNz5JhGAELvhkAlw1VAKWWTUWY9onmI36Zo.png',
		createdAt: 'Wed, 28 May 2025 11:44:34 +0100',
	},
]

const News = () => {
	const news: INew[] = use(getNews())

	return (
		<div className='container mx-auto mt-10'>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{news.map(item => (
					<NewCard key={item.createdAt} {...item} />
				))}
			</div>
		</div>
	)
}

export default News
