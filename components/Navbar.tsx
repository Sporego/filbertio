import { chakra, Box, Icon } from '@chakra-ui/react';
import { FaDev } from 'react-icons/fa';

export default function Navbar() {
	return (
		<chakra.section>
			<Box height='6em' width='100%'>
				<Icon boxSize={1000} color='cyan.400' bg='white' as={FaDev} />
			</Box>
		</chakra.section>
	);
}
