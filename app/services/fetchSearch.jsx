export async function getCategory() {
	const url = process.env.DB_API

	const res = await fetch(url)
	if (!res.ok) {
		throw new Error('Failded to fetch data')
	}
	return res.json()
}
