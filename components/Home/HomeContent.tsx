import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/motion'
import { SectionWrapper } from '../Hoc'

const HomeContent = () => {
	return (
		<>
			<div className='mb-20 lg:text-[95px] text-2xl lg:mb-40'>
				<motion.section variants={fadeIn('spring', 'top', 1 * 0.5, 0.75)} className='mb-2 lg:mb-20'>Pioneers in zzzz</motion.section>
				<motion.section variants={fadeIn('spring', 'top', 2 * 0.5, 0.75)} className='mb-2 lg:mb-20'>service &</motion.section>
				<motion.section variants={fadeIn('spring', 'top', 3 * 0.5, 0.75)} className='mb-2 lg:mb-20'>zzz services</motion.section>
			</div>
			<motion.section variants={fadeIn('spring', 'bottom', 4 * 0.5, 0.75)}>
				<button className='border-white border-2 lg:px-10 px-4 lg:py-4 py-2 font-semibold rounded-2xl lg:text-xl text-sm'>Request a zzzz service machine</button>
			</motion.section>
		</>
	)
}

export default SectionWrapper(HomeContent, '')