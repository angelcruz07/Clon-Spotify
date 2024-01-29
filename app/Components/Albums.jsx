import Banner from '../Components/Banner'
import { getData } from '../services/fetchData'
async function Albums() {
	const typeAlbum = 'albums'
	const queryAlbums = 'belicas'
	const albumsJSON = await getData(typeAlbum, queryAlbums)
	const albums = albumsJSON.albums.items

	return (
		<article className='grid grid-cols-3 gap-2 mt-5 '>
			{albums.map(({ data }) => (
				<Banner
					name={data.name}
					img={data.coverArt.sources[1].url}
					key={data.uri}
					text={data.name}
				/>
			))}
		</article>
	)
}
export default Albums
