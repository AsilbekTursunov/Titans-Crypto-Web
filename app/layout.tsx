import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Navbar from './_components/navbar'
import Provider from './provider'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Titans Crypto',
	description: 'Crypto website',
	icons: {
		icon: '/logo.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<Provider>
			<html lang='en'>
				<body className={`${geistSans.variable} ${geistMono.variable}`}>
					<Navbar />
					{children}
				</body>
			</html>
		</Provider>
	)
}
