import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPollingData = createAsyncThunk('polling/fetchPollingData', async () => {
  const res = await fetch('https://api.fivethirtyeight.com/polling?key=YOUR_API_KEY');
  const data = await res.json();
  return data.polls;
});

const pollingSlice = createSlice({
  name: 'polling',
  initialState: {
    polls: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPollingData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPollingData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.polls = action.payload;
      })
      .addCase(fetchPollingData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default pollingSlice.reducer;
