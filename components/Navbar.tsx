import {
	chakra,
	Box,
	Button,
	Center,
	Flex,
	Heading,
	Icon,
	Link,
	useBreakpointValue,
	useColorMode,
} from '@chakra-ui/react';
import { FaDev } from 'react-icons/fa';
import { RiMoonClearLine } from 'react-icons/ri';
import { FiSun } from 'react-icons/fi';

// Loading Bar Imports
import NProgress from 'nprogress'; //nprogress module


export default function Navbar() {

	const { colorMode, toggleColorMode } = useColorMode();
	const navWidth = useBreakpointValue({
		base: '100%',
		lg: '90%',
	});

	return (
		<chakra.section>
			<Box height='6em' width='100%'>
				<Center>
					<Flex
						flexDirection='row'
						justifyContent='space-between'
						height='6em'
						width={navWidth}
					>
						<Flex flexDirection='row' as={Link} href='/' onClick={() => NProgress.start()}>
							<Icon boxSize='6em' as={FaDev} />
							<Center>
								<Heading>Filbert Shi</Heading>
							</Center>
						</Flex>
						<Center>
							<Flex mt={3}>
								<Button
									as={Box}
									leftIcon={
										colorMode === 'light' ? (
											<RiMoonClearLine />
										) : (
											<FiSun />
										)
									}
									onClick={toggleColorMode}
								>
									Theme
								</Button>
								<Button>Social</Button>
								<Button as={Link} href='/blog' onClick={() => NProgress.start()}>
									Experience
								</Button>
								<Button as={Link} href='/blog' onClick={() => NProgress.start()}>
									Blog
								</Button>
							</Flex>
						</Center>
					</Flex>
				</Center>
			</Box>{' '}
		</chakra.section>
	);
}
