import authReducer from "@/features/auth/authSlice";
export const rootReducer = {
  reducer: {
    auth: authReducer,
  },
};
