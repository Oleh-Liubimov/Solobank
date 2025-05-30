import { Stack } from 'expo-router';

export default function AuthNavigator() {
    return (
        <Stack
            initialRouteName="login"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="login" options={{ title: 'Login', headerTitle: 'Login' }} />
            <Stack.Screen name="register" />
        </Stack>
    );
}
