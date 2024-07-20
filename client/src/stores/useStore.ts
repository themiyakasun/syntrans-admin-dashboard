import { create } from 'zustand';

interface StoreState {
  sidebarToggle: boolean;
  setSidebarToggle: any;
}

const useStore = create<StoreState>((set) => ({
  sidebarToggle: false,
  setSidebarToggle: (value: boolean) => set(() => ({ sidebarToggle: value })),
}));

export default useStore;
