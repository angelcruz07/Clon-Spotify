function CardMusic() {
	return (
		<a
			href='#'
			className='relative flex flex-col gap-2 p-2 pb-6 overflow-hidden transition-all duration-300 rounded-md shadow-lg w-44 play-list hover:bg-spotify-lightgrayHover hover:shadow-xl'>
			<picture className='flex-none w-full h-auto aspect-square'>
				<img src='bzp.jpg' alt='' class='object-cover w-full rounded-md' />
			</picture>
			<div className='flex flex-col flex-auto px-2'>
				<h4 className='text-sm font-semibold text-white'>Alucin</h4>
				<span className='text-xs text-white/65'>26 song</span>
			</div>
		</a>
	)
}
export default CardMusic
