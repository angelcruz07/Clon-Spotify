import CardPlaylist from './CardPlaylist'
import { getData } from '../services/fetchData'

async function BestPlaylist() {
	const typePlaylists = 'playlist'
	const queryBelicas = 'peso pluma'
	const playlistJSON = await getData(typePlaylists, queryBelicas)
	const playlist = playlistJSON.playlists.items

	return (
		<article className='mt-5'>
			<h2 className='mb-4 text-2xl font-bold '>Mejores playlist</h2>
			<div className='flex flex-wrap gap-4 '>
				{playlist.map(({ data }) => (
					<CardPlaylist
						key={data.uri}
						name={data.name}
						img={data.images.items[0].sources[0].url}
					/>
				))}
			</div>
		</article>
	)
}
export default BestPlaylist
