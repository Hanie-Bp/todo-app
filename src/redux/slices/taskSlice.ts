// store/directorySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Directory, Task } from "@/types/types";
import { getAllDirectories } from "@/lib/actions/directory.action";
import { fetchDirectories, fetchTasks } from "@/lib/utils";
import { set } from "zod";

export const fetchTaskss = createAsyncThunk("tasks/fetchTaskss", async () => {
  const data = await fetchTasks();
  console.log('///////////////////////////////////////////',data);
  
  return data;
});

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [] as Task[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaskss.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTaskss.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTaskss.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching directories";
      });
  },
});

export const { setTasks } = taskSlice.actions;
export default taskSlice.reducer;
