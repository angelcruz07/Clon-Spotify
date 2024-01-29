import CardArtist from '../Components/CardArtist'
import { getData } from '../services/fetchData'

async function Artist() {
	const typeArtist = 'artist'
	const queryArtist = 'belicos'
	const artistJSON = await getData(typeArtist, queryArtist)
	const artists = artistJSON.artists.items

	return (
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
	)
}
export default Artist
