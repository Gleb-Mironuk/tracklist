import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const fetchTracks = createAsyncThunk(
  "tracks/fetchTracks",
  async function (input, { rejectWithValue }) {
    try {
      const response = await fetch(
        `https://itunes.apple.com/search?term=${input}`, {
            headers: {
                "Access-Control-Allow-Origin": "*"
            }
        }
      );
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {}
  }
);

const initialState = {
    tracks: [],
    status: null,
    error: null,
};

export const TrackSlice = createSlice({
  name: "tracks",
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.tracks = action.payload;
    },
  },
  extraReducers: {
    [fetchTracks.pending]: (state) => {
      state.status = "loading";
      state.error = null;
      console.log("pending");
    },
    [fetchTracks.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.tracks = action.payload;
      console.log("fulfilled");
    },
    [fetchTracks.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
      console.log("rejected");
    },
  },
});

export const { setValue } = TrackSlice.actions;
export default TrackSlice.reducer;