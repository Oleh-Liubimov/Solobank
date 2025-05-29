import { COLORS } from '@/src/constants/colors';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import { Tabs } from 'expo-router';

export default function Layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: COLORS.secondary,
                tabBarStyle: {
                    backgroundColor: COLORS.background,
                    borderTopColor: COLORS.border,
                    borderTopWidth: 2,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Cards',
                    tabBarIcon: ({ color, size }) => (
                        <Feather name="credit-card" size={size} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="history"
                options={{
                    title: 'History',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="history" size={size} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
