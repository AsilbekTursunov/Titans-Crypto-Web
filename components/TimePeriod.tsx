import React from 'react'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'

interface IProps {
	times: string[]
	onSelect?: (time: string) => void
}
const TimePeriod = ({ times, onSelect }: IProps) => {
	return (
		<Select onValueChange={onSelect} >
			<SelectTrigger className='w-[180px] cursor-pointer'>
				<SelectValue placeholder='Time' />
			</SelectTrigger>
			<SelectContent className=' cursor-pointer'>
				{times.map(item => (
					<SelectItem key={item} className=' capitalize cursor-pointer text-base' value={item}>
						{item}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export default TimePeriod
