import React from 'react'
import { title, navbar } from '@/utils/constants'
import { FC } from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../Hoc'
import { fadeIn, textVariant } from '@/utils/motion'
import useModalStore from '@/store/drawStore'

const Header:FC = () => {
	const { openModal } = useModalStore()
	return (
		<div className='lg:w-[1200px] w-full flex justify-between items-center lg:py-20 py-10 mx-auto lg:px-0 px-10'>
			<motion.div className='text-white font-bold lg:text-[70px] text-xl drop-shadow-2xl cursor-pointer' variants={textVariant()} onClick={() => window.scrollTo(0, 0)}>{title.name}</motion.div>
			<div className='lg:flex items-center text-white text-lg gap-10 hidden'>
				{navbar.map((item, index) => (
					<motion.a variants={fadeIn('spring', 'right', index * 0.5, 0.75)} href={item.position} key={index} className='drop-shadow-2xl'>
						{item.name}
					</motion.a>
				))}
			</div>
			<div className='lg:hidden flex items-center gap-2'>
				<img src="/flag.png" alt="" />
				<button className='hover:bg-gray-20 text-xs' onClick={openModal}>Menu</button>
			</div>
		</div>
	)
}

export default SectionWrapper(Header, '')