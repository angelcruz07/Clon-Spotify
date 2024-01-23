import Banner from '../Components/Banner'
import CardPlaylist from '../Components/CardPlaylist'

function HomePage() {
	return (
		<>
			<main class='[grid-area:main] runded-lg overflow-y-auto overflow-hidden '>
				<section class='bg-spotify-gray rounded-lg p-5 h-full'>
					<h1 class='text-3xl font-bold text-white '>Good morning</h1>
					<article class='grid grid-cols-3 gap-2 mt-5 '>
						<Banner text='Alucin' img='bzp.jpg' />
						<Banner text='Alucin' img='bzp.jpg' />
						<Banner text='Alucin' img='bzp.jpg' />
						<Banner text='Alucin' img='bzp.jpg' />
						<Banner text='Alucin' img='bzp.jpg' />
						<Banner text='Alucin' img='bzp.jpg' />
					</article>
					<article class='flex flex-wrap mt-6 gap-4 '>
						<CardPlaylist />
						<CardPlaylist />
						<CardPlaylist />
					</article>
				</section>
			</main>
		</>
	)
}
export default HomePage
