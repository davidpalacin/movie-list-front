import { create } from 'zustand';

export const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => {
        set(user);
        localStorage.setItem('user', JSON.stringify(user));
    },
    loadUserFromStorage: () => {
        const stored = localStorage.getItem('user');
        if (stored) {
            set({ user: JSON.parse(stored) });
        }
    },
    logout: () => {
        set({ user: null });
        localStorage.removeItem('user');
    }
}));
