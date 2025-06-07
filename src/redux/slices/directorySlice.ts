// store/directorySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Directory } from "@/types/types";

export const fetchDirectories = createAsyncThunk(
  "directories/fetchDirectories",
  async (userId: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/directories`, {
      headers: {
        "Content-Type": "application/json",
        "x-user-id": userId,
      },
    });
    return (await res.json()) as Directory[];
  }
);

const directorySlice = createSlice({
  name: "directories",
  initialState: {
    items: [] as Directory[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    setDirectories: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDirectories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDirectories.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchDirectories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching directories";
      });
  },
});

export const { setDirectories } = directorySlice.actions;
export default directorySlice.reducer;
