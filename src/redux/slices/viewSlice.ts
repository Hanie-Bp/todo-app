import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ViewStateProps = {
  mode: "grid" | "list";
};

const initialState: ViewStateProps = {
  mode: "grid",
};

const viewSlice = createSlice({
  name: "view",
  initialState,
  reducers: {
    setViewMode: (state, action: PayloadAction<"grid" | "list">) => {
      state.mode = action.payload;
    },
    toggleView: (state) => {
        state.mode = state.mode === 'grid' ? 'list' : 'grid';
      },
  },
});

export const { setViewMode ,toggleView} = viewSlice.actions;
export default viewSlice.reducer;
