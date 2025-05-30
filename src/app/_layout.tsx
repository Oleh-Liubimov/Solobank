import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootNavigator from '../components/navigators/RootNavigator';
import { AuthProvider } from '../providers/AuthProvider';

const queryClient = new QueryClient();

export default function RootLayout() {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>
                <RootNavigator />
            </AuthProvider>
        </QueryClientProvider>
    );
}
