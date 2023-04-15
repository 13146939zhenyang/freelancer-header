import { create } from "zustand";
import { persist } from "zustand/middleware";

const modalStore = (set: any) => ({
  modalOpen: false,
  openModal: () => set({ modalOpen: true }),
  closeModal: () => set({ modalOpen: false }),
});

const useModalStore = create(persist(modalStore, { name: "modal" }));

export default useModalStore;
