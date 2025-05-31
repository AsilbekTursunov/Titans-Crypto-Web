import { Loader2 } from 'lucide-react'
import React from 'react'

const Loader = () => {
	return (
		<div className=' absolute flex items-center justify-center h-full w-full'>
			<Loader2 size={50} color='#429382' className=' animate-spin' />
		</div>
	)
}

export default Loader
