import { create } from "zustand";

export const useStepStore = create((set) => ({
  step: 0,
  stepDirection: "next",
  setStep: (step: number) => set({ step }),
}));

export const useDrawerStore = create<{
  isOpen: boolean;
  toggleDrawer: () => void;
  onCompleted: (idolName: string) => void;
  setOnCompleted: (onCompleted: (idolName: string) => void) => void;
}>((set) => ({
  isOpen: false,
  toggleDrawer: () =>
    set((state: { isOpen: boolean }) => ({ isOpen: !state.isOpen })),
  onCompleted: () => {},
  setOnCompleted: (onCompleted) => set({ onCompleted }),
}));

export const useModalStore = create<{
  isOpen: boolean;
  toggleModal: (state: {
    isOpen: boolean;
    title: string;
    description: string;
    onConfirm: VoidFunction;
  }) => void;
  title: string;
  description: string;
  onConfirm: () => void;
}>((set) => ({
  isOpen: false,
  toggleModal: (state) => set({ ...state }),
  title: "",
  description: "",
  onConfirm: () => {},
}));

export const useLoaderStore = create<{
  isLoading: boolean;
  toggleLoader: () => void;
}>((set) => ({
  isLoading: false,
  toggleLoader: () =>
    set((state: { isLoading: boolean }) => ({
      isLoading: !state.isLoading,
    })),
}));
