import CoinsList from '@/components/CoinsList'
import { getCoins } from '@/server'
import React, { use } from 'react'

const Cryptos = () => {
	const coins = use(getCoins(100))

  return <div className='container mx-auto mt-10'>
    <CoinsList coins={coins.coins} />
  </div>
}

export default Cryptos
