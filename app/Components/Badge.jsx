function Badge({ text }) {
	return (
		<span className='block w-20 p-2 text-sm text-center text-white rounded-full cursor-pointer bg-spotify-lightgray border-x-white hover:bg-spotify-lightgrayHover '>
			{text}
		</span>
	)
}
export default Badge
