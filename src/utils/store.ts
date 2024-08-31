import { create } from "zustand";

export const useStore = create((set) => ({
  profile: {},
  updateProfile: (data: any) => set(() => ({ profile: data })),
}));
