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
						<Flex
							flexDirection='row'
							as={Link}
							href='/'
							onClick={() => NProgress.start()}
						>
							<Icon boxSize='6em' as={FaDev} />
							<Center>
								<Heading>Filbert Shi</Heading>
							</Center>
						</Flex>
						<Center>
							<Flex mt={3}>
								<Button
									bg='transparent'
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
								<Button
									bg='transparent'
									as={Link}
									href='/resume'
									onClick={() => NProgress.start()}
								>
									Résumé
								</Button>
								<Button
									bg='transparent'
									as={Link}
									href='/my_work'
									onClick={() => NProgress.start()}
								>
									My Work
								</Button>
								<Button
									bg='transparent'
									as={Link}
									href='/blog'
									onClick={() => NProgress.start()}
								>
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
