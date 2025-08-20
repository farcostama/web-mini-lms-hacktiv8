import { create } from "zustand";

type ProgressState = {
  bacaan: boolean;
  penalaran: boolean;
  kognitif: boolean;
  markComplete: (paket: "bacaan" | "penalaran" | "kognitif") => void;
};

export const useProgressStore = create<ProgressState>((set) => ({
  bacaan: false,
  penalaran: false,
  kognitif: false,
  markComplete: (paket) => set({ [paket]: true }),
}));
