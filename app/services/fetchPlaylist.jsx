const url =
	process.env.DB_HOST +
	`album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300`
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.API_KEY,
		'X-RapidAPI-Host': process.env.API_HOST
	}
}

// 3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300

export async function getSongs(id) {
	const res = await fetch(
		'https://spotify23.p.rapidapi.com/album_tracks/?id=' + id,
		{
			cache: 'no-store'
		}
	)
	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}

function page() {
	return <div>page</div>
}
export default page
