import { create } from 'zustand';

export const useNotification = create((set) => ({
  // for success notifiaction
  isNotificationVisible: false,
  setNotificationVisible: (value) => {
    set({ isNotificationVisible: value })
  },

  // for error notification
  isErrorNotificationVisible: false,
  setErrorNotificationVisible: (value) => {
    set({
      isErrorNotificationVisible: value
    })
  }
}));
