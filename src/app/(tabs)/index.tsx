import { COLORS } from '@/src/constants/colors';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.flex1}>
            <View style={styles.container}>
                <Text style={styles.text}>Home screen</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    flex1: { flex: 1 },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.background,
    },
    text: {
        color: COLORS.onBackground,
    },
});
