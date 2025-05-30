import { StyleSheet } from 'react-native';
import { COLORS } from '../constants/colors';
import { rem } from '../utils/rem';

export const DefaultStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: rem(16),
    },
    linkText: {
        color: COLORS.blue,
        textDecorationLine: 'underline',
    },
});
