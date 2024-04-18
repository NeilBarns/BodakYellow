import { Dimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

const window = Dimensions.get('window');
export const screenHeight = window.height;
export const screenWidth = window.width;
export const scaledSheet = ScaledSheet;
