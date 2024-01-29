function CardSearch({ name, color, img }) {
	const colorBG = { backgroundColor: color }
	return (
		<a
			style={colorBG}
			href='#'
			className='relative flex flex-col gap-4 p-3 overflow-hidden transition-all duration-300 rounded-md shadow-lg w-44 h-44 play-list hover:shadow-xl'>
			<div className='flex flex-col flex-auto '>
				<h4 className='text-2xl font-semibold text-white'>{name}</h4>
			</div>
			<picture className='flex-none w-full h-auto aspect-square'>
				<img
					src={img}
					alt={name}
					className='absolute bottom-0 right-[-6px] object-cover w-20 transform rotate-12'
				/>
			</picture>
		</a>
	)
}
export default CardSearch
