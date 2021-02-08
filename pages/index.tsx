import Head from 'next/head';
import Navbar from '../components/Navbar';
import Resume from '../components/Resume';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Filbert Shi</title>
			</Head>
			<Navbar />
			<Resume />
		</div>
	);
}
