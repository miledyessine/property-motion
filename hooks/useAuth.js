import { create } from "zustand";

export const useAuth = create((set) => ({
    user: null,
    loading: true,

    fetchUser: async () => {
        try {
            const res = await fetch("/api/auth/me");
            const data = await res.json();
            console.log("user",data.user)
            set({ user: data.user, loading: false });
        } catch (err) {
            set({ user: null, loading: false });
        }
    },

    logout: async () => {
        await fetch("/api/auth/logout", { method: "POST" });
        set({ user: null });
        window.location.href = "/login";
    },
}));
