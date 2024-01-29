function Search() {
	return (
		<div className='relative flex items-center mb-10'>
			<input
				className='block h-12 p-3 pl-12 text-sm rounded-full bg-spotify-lightgrayHover focus:border-white w-96 '
				placeholder='Que deseas escuchar?'
			/>
			<svg
				data-encore-id='icon'
				role='img'
				width='15px'
				aria-hidden='true'
				fill='#fff'
				className='absolute text-white transform -translate-y-1/2 left-4 top-1/2'
				viewBox='0 0 16 16'>
				<path d='M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z'></path>
			</svg>
		</div>
	)
}
export default Search
