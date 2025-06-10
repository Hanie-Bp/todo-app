import { configureStore } from "@reduxjs/toolkit";
import viewReducer from "./slices/viewSlice";
import directoryReducer from "./slices/directorySlice";
import taskReducer from "./slices/taskSlice";

export const store = configureStore({
  reducer: {
    view: viewReducer,
    directories: directoryReducer,
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
