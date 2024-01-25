import ListSideBar from './ListSideBar'
import YourLibrary from './YourLibrary'
import Badge from './Badge'
import PlayList from './PlayList'
import { getData } from '../services/fetchData'

async function SideBar() {
	const limit = 9
	const typeData = 'playlist'
	const query = 'regional-mexicano'

	const playlistJSON = await getData(typeData, query, limit)
	const playlist = playlistJSON.playlists.items

	return (
		<>
			<aside className='h-auto rounded-lg bg-spotify-black [grid-area:aside] flex flex-col overflow-y-auto gap-y-2 scroll-smooth '>
				<ListSideBar />
				<article className='h-auto p-3 rounded-lg bg-spotify-gray'>
					<YourLibrary />
					<div className='flex flex-row mt-5 gap-x-2'>
						<Badge text='Playlist' />
						<Badge text='Albunes' />
						<Badge text='Artistas' />
					</div>
					<div className='mt-5 '>
						<ul>
							{playlist.map(({ data }) => (
								<PlayList
									key={data.uri}
									name={data.name}
									img={data.images.items[0].sources[0].url}
								/>
							))}
						</ul>
					</div>
				</article>
			</aside>
		</>
	)
}
export default SideBar
