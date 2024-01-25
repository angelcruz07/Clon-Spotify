export async function getData(type, query, limit = 6) {
	const url = `https://spotify23.p.rapidapi.com/search/?q=${query}&type=${type}&offset=0&limit=${limit}&numberOfTopResults=6`
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '313129755emsh68f70976f320037p1b4615jsn802210f8c7f1',
			'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
		}
	}
	const res = await fetch(url, options)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
