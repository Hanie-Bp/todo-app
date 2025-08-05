// store/directorySlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Directory } from "@/types/types";
import { fetchDirectories } from "@/lib/server-utils";

export const fetchDirectoriess = createAsyncThunk(
  "directories/fetchDirectories",
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchDirectories();
      return data;
    } catch (error: unknown) {
      console.error("Error in fetchDirectories thunk:", error);

      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }

      return rejectWithValue("Failed to fetch directories");
    }
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
      .addCase(fetchDirectoriess.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDirectoriess.fulfilled, (state, action) => {
        console.log("action", action.payload);
        if (action.payload) {
          state.items = action.payload;
        }

        state.loading = false;
      })
      .addCase(fetchDirectoriess.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Error fetching directories";
      });
  },
});

export const { setDirectories } = directorySlice.actions;
export default directorySlice.reducer;
