export async function getCategory() {
	const url = 'http://localhost:4000/category'

	const res = await fetch(url)
	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}
