import { useState } from 'react'
import Head from 'next/head'
import { Header, VideoBackground, HomeContent } from '@/components'
import { Drawer } from 'antd';
import { navbar } from '@/utils/constants'
import useModalStore from '@/store/drawStore';
export default function Home() {
	const { modalOpen, openModal, closeModal } = useModalStore()
	return (
		<>
			<Head>
				<title>Video Header</title>
				<meta name="description" content="Header" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/icon.svg" />
			</Head>
			<main className='w-full min-h-[100vh] bg-gray-200 relative'>
				<div className='w-full h-[100vh] absolute top-0 left-0 z-10'>
					<VideoBackground />
				</div>
				<div className='w-full h-[100vh] absolute top-0 left-0 bg-black bg-opacity-[0.3] z-20'>
					<div className='w-full lg:h-[900px] mx-auto lg:mt-[200px] mt-[190px] lg:w-[1200px] lg:pt-20 pt-10 px-10 lg:px-0'>
						<HomeContent />
					</div>
				</div>
				<div className='w-full flex sticky top-0 left-0 justify-center bg-transparent z-30 flex-col'>
					<Header />
				</div>
				<section id="torio" className='w-full h-[100vh] mt-[100vh] lg:py-[150px] flex justify-center'>
					<div className='lg:w-[1200px] w-full px-10'>
						asdf
					</div>

				</section>
				<section id="barhopp" className='w-full h-[100vh] lg:py-[150px] flex justify-center'>
					<div className='lg:w-[1200px] w-full px-10'>
						barhopp
					</div>
				</section>
				<section id="projects" className='w-full h-[100vh] lg:py-[150px] flex justify-center'>
					<div className='lg:w-[1200px] w-full px-10'>projects</div>
				</section>
				<Drawer
					title="Troio"
					placement="left"
					width="100%"
					onClose={closeModal}
					open={modalOpen}
				>
					<div className='w-full h-full flex text-black flex-col justify-between'>
						<div className='flex flex-col gap-4'>
							{navbar.map((item, index) => (
								<a href={item.position}>{item.name}</a>
							))}
						</div>
						<div className='flex gap-4 flex-col'>
						<button className='w-full border-2 border-gray-400 py-4'>My booking</button>
						<button className='w-full bg-gray-400 py-4 text-white'>Booking now</button>
						</div>
					</div>
				</Drawer>
			</main>
		</>
	)
}
