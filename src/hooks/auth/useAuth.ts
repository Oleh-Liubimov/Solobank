import { auth } from '@/src/firebase';
import { useAuthStore } from '@/src/store/useAuthStore';
import { signOut } from 'firebase/auth';

export const useAuth = () => {
    const user = useAuthStore(store => store.user);
    const setUser = useAuthStore(store => store.setUser);
    const isLoading = useAuthStore(store => store.isLoading);

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error(error);
        }
    };

    return {
        user,
        isLoading,
        logout,
    };
};
