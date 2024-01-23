import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Clon spotify',
	description: 'This is a project for mastermind '
}

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body className={inter.className}>{children}</body>
		</html>
	)
}
