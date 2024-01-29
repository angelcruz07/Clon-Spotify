import CardSearch from '../Components/CardSearch'
import { getCategory } from '../services/fetchSearch'
import SearchNav from '../Components/Search'

async function Search() {
	const categories = await getCategory()
	return (
		<main className='[grid-area:main] runded-lg overflow-y-auto overflow-hidden'>
			<section className='h-full p-5 rounded-lg bg-spotify-gray'>
				<SearchNav />
				<h1 className='text-3xl font-bold text-white '>Buscar</h1>
				<article className='flex flex-wrap justify-around mt-5 gap-y-5 '>
					{categories.map((category) => (
						<CardSearch
							key={category.id}
							name={category.name}
							color={category.color}
							img={category.img}
						/>
					))}
				</article>
			</section>
		</main>
	)
}
export default Search
