import Portada from '../Components/Portada'
import Songs from '../Components/Songs'
import Controls from '../Components/Controls'
import { getSongs } from '../services/fetchPlaylist'

function PlaylistDetail() {
	return (
		<main className='[grid-area:main] runded-lg overflow-y-auto overflow-hidden'>
			<section className='h-full p-5 rounded-lg bg-spotify-gray'>
				<Portada />
				<Controls />
				<Songs />
			</section>
		</main>
	)
}
export default PlaylistDetail
