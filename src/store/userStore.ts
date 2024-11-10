import { create } from 'zustand';

interface UserState {
  isAuthenticated: boolean;
  token: string | null;
  setToken: (token: string | null) => void;
}

export const useUserStore = create<UserState>((set: (arg0: Partial<UserState>) => void) => ({
  isAuthenticated: false,
  token: null,
  setToken: (token: string | null) => set({ token, isAuthenticated: !!token }),
}));
