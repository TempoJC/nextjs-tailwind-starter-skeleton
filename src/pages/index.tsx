import { Calculadora } from '@/Molecules/Calculadora';
import { Footer } from '@/Organisms/Footer';
import { Header } from '@/Organisms/Header';
import type { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<div>
			<Header />

			<main>
				<div className="bg-green-100 py-14">
					<h1 className="text-3xl text-center font-bold underline">
						Welcome to <a href="https://nextjs.org">Next.js!</a>
					</h1>

					<h3 className="text-2xl tracking-widest text-green-600 text-center">
						Calculator
					</h3>

					<div className="md:flex md:justify-center md:space-x-8 md:px-14">
						<Calculadora />
					</div>
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default Home;
