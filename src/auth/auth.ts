import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useAuthStore } from '../store/useAuthStore';

interface AuthDTO {
    email: string;
    password: string;
}

export const register = async ({ email, password }: AuthDTO) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    useAuthStore.getState().setUser(result.user);
};

export const login = async ({ email, password }: AuthDTO) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    useAuthStore.getState().setUser(result.user);
};

export const logout = async () => {
    await signOut(auth);
    useAuthStore.getState().setUser(null);
};
