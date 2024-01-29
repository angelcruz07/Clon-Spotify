import Link from 'next/link'

export default function NotFound() {
	return (
		<main className='flex flex-col items-center justify-center h-screen bg-black'>
			<img src='./img/error.svg' height={50} className='text-white' />
			<h2 className='font-bold text-white'>
				¡Ups! Parece que hubo un problema
			</h2>
			<p className='mt-5 text-white'>No podemos encontrar la ruta solicitada</p>
			<p className='text-white'>
				Vuelve a la pagina de{' '}
				<Link href='/' className='text-green-500'>
					Inicio
				</Link>{' '}
			</p>
		</main>
	)
}
