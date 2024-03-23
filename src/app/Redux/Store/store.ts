import { configureStore } from "@reduxjs/toolkit";
import dataReduces from "../Slices/dataSlice";

export function makeStore() {
    return configureStore({
        reducer: {
            data: dataReduces,
        },
    });
    }
export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;