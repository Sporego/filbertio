import Head from 'next/head';
import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';

export default function Home() {
	const PDFJS = dynamic(
		() => {
			return import('../components/Resume');
		},
		{ ssr: false }
	);
	return (
		<div>
			<Head>
				<title>Filbert Shi</title>
			</Head>
			<Navbar />
			<PDFJS />
		</div>
	);
}
