import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userActions } from "../../../configs/apis";

// Async thunk
export const fetchUsers = createAsyncThunk(
  "users/fetchUsers", // Action type
  async (_, thunkAPI) => {
    try {
      const response = await userActions.read();
      return response.data; // this data is passed to `extraReducers`
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || "Failed to fetch users"
      );
    }
  }
);

// Slice
export const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    loading: false,
    error: false,
  },
  reducers: {
    createUser: (state, action) => {
      console.log("Create User");
    },
    updateUser: (state, action) => {
      console.log("Update User");
    },
    deleteUser: (state, action) => {
      console.log("Delete User");
    },
  },
  // Add thunk to the slice
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // Update state with user data
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

// Action creators are generated for each case reducer function
export const { createUser, readUser, updateUser, deleteUser } =
  usersSlice.actions;

export default usersSlice.reducer;
