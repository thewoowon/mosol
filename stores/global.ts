import { create } from "zustand";

export const useStepStore = create((set) => ({
  step: 0,
  stepDirection: "next",
  setStep: (step: number) => set({ step }),
}));

export const useDrawerStore = create<{
  isOpen: boolean;
  idolName: string;
  setIdolName: (idolName: string) => void;
  toggleDrawer: () => void;
  onCompleted: (idolName: string) => void;
  setOnCompleted: (onCompleted: (idolName: string) => void) => void;
}>((set) => ({
  isOpen: false,
  idolName: "",
  setIdolName: (idolName) => set({ idolName }),
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
  onLoader: () => void;
  offLoader: () => void;
}>((set) => ({
  isLoading: false,
  toggleLoader: () =>
    set((state: { isLoading: boolean }) => ({
      isLoading: !state.isLoading,
    })),
  onLoader: () => set({ isLoading: true }),
  offLoader: () => set({ isLoading: false }),
}));

export const useRankStore = create<{
  sex: string;
  resultId: number | null;
  setSex: (sex: string) => void;
  setResultId: (resultId: number) => void;
}>((set) => ({
  sex: "female",
  resultId: null,
  setSex: (sex: string) => set({ sex }),
  setResultId: (resultId: number) => set({ resultId }),
}));
