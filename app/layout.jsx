import { Inter } from 'next/font/google'
import Navbar from './Components/SideBar'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Spotyclon',
	description: 'This is a project for mastermind',
	icons: {
		icon: [
			{
				url: '/img/icono.webp'
			}
		]
	}
}

export default function RootLayout({ children }) {
	return (
		<html lang='es' className='h-screen gap-2 p-2 realative'>
			<body className={inter.className}>
				<div id='app' className='h-screen gap-2 p-2 realative'>
					<Navbar />
					{children}
				</div>
			</body>
		</html>
	)
}
