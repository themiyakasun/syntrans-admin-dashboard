import { create } from 'zustand';

interface StoreState {
  sidebarToggle: boolean;
  setSidebarToggle: any;
  messageDropdown: boolean;
  setMessageDropdown: any;
  notificationDropdown: boolean;
  setNotificationDropdown: any;
}

const useStore = create<StoreState>((set) => ({
  sidebarToggle: false,
  messageDropdown: false,
  notificationDropdown: false,
  setSidebarToggle: (value: boolean) => set(() => ({ sidebarToggle: value })),
  setMessageDropdown: (value: boolean) =>
    set(() => ({ messageDropdown: value })),
  setNotificationDropdown: (value: boolean) =>
    set(() => ({ notificationDropdown: value })),
}));

export default useStore;
