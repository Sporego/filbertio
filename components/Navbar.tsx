import {
	chakra,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Icon,
	useBreakpointValue,
	useColorMode,
} from '@chakra-ui/react';
import { FaDev } from 'react-icons/fa';

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const navWidth = useBreakpointValue({
		base: '100%',
		lg: '90%',
	});

	return (
		<chakra.section>
			<Box height='6em' width='100%' bg='white'>
				<Center>
					<Flex
						flexDirection='row'
						bg='black'
						height='6em'
						width={navWidth}
					>
						<Icon boxSize='6em' as={FaDev} />
						<Center>
							<Heading>Filbert Shi</Heading>
						</Center>
					</Flex>
				</Center>
			</Box>
		</chakra.section>
	);
}
