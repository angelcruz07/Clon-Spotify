import Banner from '../Components/Albums'
import CardPlaylist from '../Components/BestPlaylist'
import CardArtist from '../Components/Artist'

async function HomePage() {
	return (
		<>
			<main className='[grid-area:main] runded-lg overflow-y-auto overflow-hidden '>
				<section className='h-auto p-5 rounded-lg bg-spotify-gray'>
					<h1 className='text-3xl font-bold text-white '>Good morning</h1>
					<Banner />
					<CardPlaylist />
					<CardArtist />
				</section>
			</main>
		</>
	)
}
export default HomePage
