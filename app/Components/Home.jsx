import Banner from '../Components/Banner'
import CardPlaylist from '../Components/CardPlaylist'
import CardArtist from '../Components/CardArtist'
import { getData } from '../services/fetchData'

async function HomePage() {
	const typeAlbum = 'albums'
	const queryAlbums = 'belicas'

	const typePlaylists = 'playlist'
	const queryBelicas = 'peso pluma'

	const typeArtist = 'artist'
	const queryArtist = 'belicos'

	const albumsJSON = await getData(typeAlbum, queryAlbums)
	const albums = albumsJSON.albums.items

	const playlistJSON = await getData(typePlaylists, queryBelicas)
	const playlist = playlistJSON.playlists.items

	const artistJSON = await getData(typeArtist, queryArtist)
	const artists = artistJSON.artists.items

	return (
		<>
			<main className='[grid-area:main] runded-lg overflow-y-auto overflow-hidden '>
				<section className='h-auto p-5 rounded-lg bg-spotify-gray'>
					<h1 className='text-3xl font-bold text-white '>Good morning</h1>
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
					<article className='mt-5'>
						<h2 className='mb-4 text-2xl font-bold'>Artistas</h2>
						<div className='flex flex-wrap gap-4'>
							{artists.map(({ data }) => (
								<CardArtist
									key={data.uri}
									name={data.profile.name}
									img={data.visuals.avatarImage.sources[0].url}
								/>
							))}
						</div>
					</article>
				</section>
			</main>
		</>
	)
}
export default HomePage
