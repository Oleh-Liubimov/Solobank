import { BackgroundGradient } from '@/src/components/ui/BackgroundGradient';
import { COLORS } from '@/src/constants/colors';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.flex1}>
            <StatusBar barStyle={'light-content'} />
            <BackgroundGradient />
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
    },
    text: {
        color: COLORS.onBackground,
    },
});
