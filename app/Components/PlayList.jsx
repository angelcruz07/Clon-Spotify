function PlayList() {
	return (
		<>
			<a
				href='#'
				className='relative flex items-center gap-5 p-2 overflow-hidden rounded-md play-list hover:bg-spotify-lightgrayHover text-spotify-lightgray '>
				<picture>
					<img src='bzp.jpg' alt='' />
				</picture>
				<div className='flex flex-col flex-auto truncate '>
					<h4 className='text-sm font-semibold text-white '>Alucin</h4>
					<span className='text-xs text-white/65'>26 song</span>
				</div>
			</a>
		</>
	)
}
export default PlayList
