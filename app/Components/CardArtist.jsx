function CardArtist({ img, name }) {
	return (
		<a
			href='#'
			className='relative flex flex-col gap-2 p-4 pb-6 overflow-hidden transition-all duration-300 rounded-md shadow-lg w-44 play-list bg-spotify-lightgray hover:bg-spotify-lightgrayHover hover:shadow-xl'>
			<picture className='flex-none w-full h-auto aspect-square'>
				<img
					src={img}
					alt={name}
					className='object-cover rounded-full h-30 w-30'
				/>
			</picture>
			<div className='flex flex-col flex-auto px-2'>
				<h4 className='text-sm font-semibold text-white'>{name}</h4>
			</div>
		</a>
	)
}
export default CardArtist
