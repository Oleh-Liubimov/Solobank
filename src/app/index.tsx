import { Redirect } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../constants/colors';
import { useAuth } from '../hooks/auth/useAuth';

export default function Index() {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <ActivityIndicator size={'large'} color={COLORS.onBackground} />;
    }

    if (!user) {
        return <Redirect href={'/(auth)/login'} />;
    }
    return <Redirect href={'/(tabs)'} />;
}
