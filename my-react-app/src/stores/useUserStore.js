import { create } from "zustand";

//create function is to create store ,it take callback that returns obj(data) to create function ,create func returns a hook to access the data
const useUserStore = create((set) => ({
    user: null,

    //action to set user
    setUser: (currentUser) => set({ user: currentUser }),

    //action to clear user(logOut)
    clearUser: () => (set({ user: null }))
}))

export default useUserStore;