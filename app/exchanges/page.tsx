import ExchangeCard from '@/components/cards/Exchange';
import Exchange from '@/components/cards/Exchange';
import { getExchanges } from '@/server'
import React, { use } from 'react'

const Exchanges = () => {
  const exchanges:IExchange[] = use(getExchanges(30)) 
  
  return <div className='container mx-auto mt-10 mb-10'> 
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {exchanges.map(item => <ExchangeCard key={item.id} {...item} />)}
    </div>
  </div>
}

export default Exchanges
