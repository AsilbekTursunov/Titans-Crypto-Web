'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
	const pathName = usePathname()
	return (
		<div className='bg-primaryDark py-4'>
			<nav className='flex items-center gap-5 container mx-auto justify-between'>
				<Link href={'/'} className='flex cursor-pointer items-center gap-5'>
					<Image src={'/logo.png'} alt='logo' width={100} height={100} className='size-14' />
					<h1 className='text-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-800 font-bold'>
						Titans Crypto
					</h1>
				</Link>
				<div className='flex items-center gap-2'>
					<Link
						href={'/'}
						className={` text-xl hover:text-emerald-400 cursor-pointer px-4 py-2 ${
							pathName == '/' ? 'text-emerald-400 border-b border-emerald-400' : 'text-emerald-600'
						}`}
					>
						Home
					</Link>
					<Link
						href={'/cryptos'}
						className={` text-xl hover:text-emerald-400 cursor-pointer px-4 py-2 ${
							pathName == '/cryptos'
								? 'text-emerald-400 border-b border-emerald-400'
								: 'text-emerald-600'
						}`}
					>
						Cryptos
					</Link>
					<Link
						href={'/exchanges'}
						className={` text-xl hover:text-emerald-400 cursor-pointer px-4 py-2 ${
							pathName == '/exchanges'
								? 'text-emerald-400 border-b border-emerald-400'
								: 'text-emerald-600'
						}`}
					>
						Exchanges
					</Link>
					<Link
						href={'/news'}
						className={` text-xl hover:text-emerald-400 cursor-pointer px-4 py-2 ${
							pathName == '/news'
								? 'text-emerald-400 border-b border-emerald-400'
								: 'text-emerald-600'
						}`}
					>
						News
					</Link>
				</div>
			</nav>
		</div>
	)
}

export default Navbar
