import { create } from "zustand";

export const useStepStore = create((set) => ({
  step: 0,
  stepDirection: "next",
  setStep: (step: number) => set({ step }),
}));

export const useDrawerStore = create<{
  isOpen: boolean;
  toggleDrawer: () => void;
  node: React.ReactNode | null;
  setNode: (node: React.ReactNode) => void;
}>((set) => ({
  isOpen: false,
  toggleDrawer: () =>
    set((state: { isOpen: boolean }) => ({ isOpen: !state.isOpen })),
  node: null,
  setNode: (node: React.ReactNode) => set({ node }),
}));
