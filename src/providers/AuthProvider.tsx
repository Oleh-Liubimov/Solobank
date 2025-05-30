import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { auth } from '../firebase';
import { useAuthStore } from '../store/useAuthStore';

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const setUser = useAuthStore(state => state.setUser);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setUser(user);
        });
        return () => unsubscribe();
    }, [setUser]);
    return <>{children}</>;
};
