const Banner = ({ img, text }) => {
	return (
		<div className='flex flex-row items-center flex-auto rounded gap-x-5 bg-spotify-lightgray hover:bg-spotify-lightgrayHover '>
			<img src={img} alt={text} class='rounded-s' />
			<h2 class='text-white text-sm font-bold '>{text}</h2>
		</div>
	)
}
export default Banner
