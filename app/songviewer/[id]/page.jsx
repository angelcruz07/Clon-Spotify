const url =
	'https://spotify23.p.rapidapi.com/album_tracks/?id=3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300'
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '313129755emsh68f70976f320037p1b4615jsn802210f8c7f1',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
}

try {
	const response = await fetch(url, options)
	const result = await response.text()
	console.log(result)
} catch (error) {
	console.error(error)
}

// 3IBcauSj5M2A6lTeffJzdv&offset=0&limit=300

async function getSongs(id) {
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
