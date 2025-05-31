import millify from 'millify'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CoinCard = (item: ICoin) => { 
  
  return (
    <Link href={`/coin/${item.uuid}`} className='border border-neutral-200 rounded-lg hover:shadow-accent transition-all cursor-pointer'>
      <div className="flex justify-between items-center py-2 px-4 border-b border-b-neutral-200">
        <h3 className="font-medium text-xl text-neutral-800 capitalize">{item.name}</h3>
        <Image src={item.iconUrl} alt={item.name} width={100} height={100} className='size-10 rounded-full' />
      </div>  
      <div className='py-2 px-4'>
        <div className="flex justify-between items-center text-lg">
          <p>Price</p>
          <span>${millify(Number(item.price))}</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Market Cap</p>
          <span>${millify(Number(item.marketCap))}</span>
        </div>
        <div className="flex justify-between items-center text-lg">
          <p>Daily Change</p>
          <span>{item.change}</span>
        </div>
      </div>
    </Link>
  )
}

export default CoinCard