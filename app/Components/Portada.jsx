function Portada() {
	return (
		<article className='flex flex-row'>
			<picture className='m-4 '>
				<img
					src='/img/mexicana.jpeg'
					alt='Portadada'
					className='rounded w-44 h-44'
				/>
			</picture>
			<div className='flex flex-col justify-between p-5 '>
				<h2 className='font-semibold'>Playlist</h2>
				<h2 className='font-bold text-7xl'>Alucin</h2>
				<h2 className='font-bold'>
					Angel Cruz <span className='text-base font-normal'>- 22 Song</span>
				</h2>
			</div>
		</article>
	)
}
export default Portada
