import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMediaCoverage = createAsyncThunk('mediaCoverage/fetchMediaCoverage', async () => {
  const res = await fetch('https://newsapi.org/v2/everything?q=US+2024+election&apiKey=YOUR_API_KEY');
  const data = await res.json();
  return data.articles;
});

const mediaCoverageSlice = createSlice({
  name: 'mediaCoverage',
  initialState: {
    articles: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMediaCoverage.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMediaCoverage.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload;
      })
      .addCase(fetchMediaCoverage.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default mediaCoverageSlice.reducer;
