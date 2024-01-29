import Link from 'next/link'

const Banner = ({ img, text, name }) => {
	return (
		<Link
			href={`songviewer/` + '3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300'}
			className='flex flex-row items-center flex-auto rounded cursor-pointer gap-x-5 bg-spotify-lightgray hover:bg-spotify-lightgrayHover '>
			<img src={img} alt={text} className='rounded-s' />
			<h2 className='text-sm font-bold text-white '>{text}</h2>
		</Link>
	)
}
export default Banner
