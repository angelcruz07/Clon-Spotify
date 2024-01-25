function PlayList({ name, img, description }) {
	return (
		<>
			<li>
				<a
					href='#'
					className='relative flex items-center gap-5 p-2 overflow-hidden rounded-md play-list hover:bg-spotify-lightgrayHover text-spotify-lightgray '>
					<picture className='aspect-square'>
						<img src={img} alt={name} className='w-10' />
					</picture>
					<div className='flex flex-col flex-auto truncate '>
						<h4 className='text-sm font-semibold text-white'>{name}</h4>
						<span className='text-xs text-white/65'>{description}</span>
					</div>
				</a>
			</li>
		</>
	)
}
export default PlayList
