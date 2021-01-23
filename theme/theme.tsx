// theme.js
import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
import breakpoints from './breakpoints';

interface overrides {
	styles: object;
	breakpoints: object;
}

const overrides = {
	styles,
	breakpoints,
};
export default extendTheme(overrides);
