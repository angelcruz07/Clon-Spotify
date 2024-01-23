import ListSideBar from './ListSideBar'
import YourLibrary from './YourLibrary'
import Badge from './Badge'
import PlayList from './PlayList'

function SideBar() {
	return (
		<>
			<aside className='h-full rounded-lg bg-spotify-black [grid-area:aside] flex flex-col overflow-y-auto gap-y-2 '>
				<ListSideBar />
				<article className='h-full p-3 rounded-lg bg-spotify-gray'>
					<YourLibrary />
					<div class='mt-5  flex flex-row gap-x-2'>
						<Badge text='Playlist' />
						<Badge text='Albunes' />
						<Badge text='Artistas' />
					</div>
					<div class='mt-5 '>
						<ul>
							<li>
								<PlayList />
							</li>
						</ul>
					</div>
				</article>
			</aside>
		</>
	)
}
export default SideBar
