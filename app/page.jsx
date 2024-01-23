import SideBar from './Components/SideBar'
import HomePage from './Components/Home'
import Footer from './Components/Footer'

export default function Home() {
	return (
		<>
			<div id='app' className='h-screen gap-2 p-2 realative'>
				<SideBar />
				<HomePage />
				<Footer />
			</div>
		</>
	)
}
