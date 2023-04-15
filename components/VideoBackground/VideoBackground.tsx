import React from 'react'

const VideoBackground = () => {
	return (
		<div className='w-full h-full'>
			<video autoPlay loop muted className='w-full h-full object-cover'>
				<source src='/video.mp4' type='video/mp4' />
			</video>
		</div>
	)
}

export default VideoBackground