import { create } from "zustand";

export const useStepStore = create((set) => ({
  step: 0,
  stepDirection: "next",
  setStep: (step: number) => set({ step }),
}));
