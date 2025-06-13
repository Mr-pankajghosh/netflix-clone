import axios from '../axios';
import toast from "react-hot-toast";
import { create } from 'zustand';

export const useAuthStore = create((set) => ({
    user:null,
    isSigningUp:false,
    isCheckingAuth: true,
    isLoggingOut: false,
    isLoggingin: false,
    signup: async (credentials) => {
        set({isSigningUp: true});
        try{
            const response = await axios.post("/auth/signup",credentials);
            set({ user: response.data.user,  isSigningUp: false });
            toast.success("Account created successfully");
        }catch(error){
            toast.error(error.response.data.message || "Signup failed");
            set({isSigningUp: false, user: null });
        }
    },
    login: async (credentials) => {
        set({ isLoggingin: true});
        try{
            const response = await axios.post("/auth/login",credentials);
            set({ user: response.data.user, isLoggingin: false});
        }catch(error){
            set({ isLoggingin: false, user: null });
            toast.error(error.response.data.message || "Login failed");
        }
    },
    logout: async () => {
        set({ isLoggingOut: true});
        try {
            await axios.post("/auth/logout");
            set({ user: null,  isLoggingOut: false });
            toast.success("Logged ouut succesfully.");
        } catch (error) {
            set({ isLoggingOut: false });
            
            toast.error(error.response.data.message || "Logout failed");
        }
    },
    authCheck: async () => {
        set({ isCheckingAuth: true });
        try {
          const response = await axios.get("/auth/authCheck");
          set({ user: response.data.user, isCheckingAuth: false });
        } catch (error) {
          set({ isCheckingAuth: false, user: null });
      
          // Optional: Log or handle non-401 errors
          if (error.response && error.response.status !== 401) {
            console.error("Auth check failed:", error);
            // toast.error("Something went wrong, please try again later");
          }
        }
      },
      
}));