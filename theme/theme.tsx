// theme.js
import { extendTheme } from '@chakra-ui/react';
// Global style overrides
import styles from './styles';
import breakpoints from './breakpoints';
import colorModeConfig from './colorModeConfig';

interface overrides {
	styles: object;
	breakpoints: object;
	colorModeConfig: object;
}

const overrides = {
	styles,
	breakpoints,
	colorModeConfig,
};
export default extendTheme(overrides);
