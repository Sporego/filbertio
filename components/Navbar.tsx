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
import { RiMoonClearLine } from 'react-icons/ri'
import { FiSun } from 'react-icons/fi'

export default function Navbar() {
	const { colorMode, toggleColorMode } = useColorMode();
	const navWidth = useBreakpointValue({
		base: '100%',
		lg: '90%',
    });
    
    function toggleIcon() {

        return

    }


	return (
		<chakra.section>
			<Box height='6em' width='100%'>
				<Center>
					<Flex flexDirection='row' justifyContent="space-between" height='6em' width={navWidth}>
                        <Flex flexDirection='row' as={Link} href="/">
						<Icon boxSize='6em' as={FaDev} />
						<Center>
							<Heading>Filbert Shi</Heading>
						</Center>
                        </Flex>
						<Center>
							<Button leftIcon={colorMode === "light" ? <RiMoonClearLine/> : <FiSun/> } onClick={toggleColorMode}>
								Toggle Theme
							</Button>
						</Center>
					</Flex>
				</Center>
			</Box>
		</chakra.section>
	);
}
