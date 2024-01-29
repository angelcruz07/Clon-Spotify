function CardMusic({ name, img }) {
	return (
		<a
			href='/'
			className='relative flex flex-col flex-auto p-4 pb-6 overflow-hidden transition-all duration-300 rounded-md shadow-lg max-w-44 play-list bg-spotify-lightgray hover:bg-spotify-lightgrayHover hover:shadow-xl'>
			<picture className='flex-none w-full h-auto aspect-square'>
				<img src={img} alt={name} className='object-cover rounded-md' />
			</picture>
			<div className='flex flex-col flex-auto px-2'>
				<h4 className='text-sm font-semibold text-white'>{name}</h4>
			</div>
		</a>
	)
}
export default CardMusic
