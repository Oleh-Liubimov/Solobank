import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthStore } from '../store/useAuthStore';

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const setUser = useAuthStore(state => state.setUser);
    const setIsLoading = useAuthStore(state => state.setIsLoading);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setUser(user);
            setIsLoading(false);
        });
        return () => unsubscribe();
    }, [setIsLoading, setUser]);
    return <>{children}</>;
};
