export async function getData(type, query, limit = 6) {
	const url =
		process.env.DB_HOST +
		`?q=${query}&type=${type}&offset=0&limit=${limit}&numberOfTopResults=6`
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': process.env.API_KEY,
			'X-RapidAPI-Host': process.env.API_HOST
		}
	}
	const res = await fetch(url, options)
	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}
	return res.json()
}
