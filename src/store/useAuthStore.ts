import { User } from 'firebase/auth';
import { create } from 'zustand';
import { storage } from '../utils/storage';

type AuthState = {
    user: User | null;
    setUser: (user: User | null) => void;
    isLoading: boolean;
    setIsLoading: (loading: boolean) => void;
};

export const useAuthStore = create<AuthState>(set => ({
    user: null,
    isLoading: true,
    setUser: user => {
        set({ user });
        if (user) {
            storage.set('user_id', user.uid);
        } else {
            storage.remove('user_id');
        }
    },
    setIsLoading: loading => {
        set({ isLoading: loading });
    },
}));
