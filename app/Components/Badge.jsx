function Badge({ text }) {
	return (
		<span class='text-center text-sm block p-2 rounded-full w-20 bg-spotify-lightgray border-x-white text-white hover:bg-spotify-lightgrayHover cursor-pointer '>
			{text}
		</span>
	)
}
export default Badge
