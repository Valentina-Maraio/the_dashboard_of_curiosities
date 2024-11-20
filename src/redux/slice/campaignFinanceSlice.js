// redux/slices/campaignFinanceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCampaignFinanceData = createAsyncThunk('campaignFinance/fetchCampaignFinanceData', async () => {
  const res = await fetch('https://api.opensecrets.org/?key=YOUR_API_KEY');
  const data = await res.json();
  return data.results;
});

const campaignFinanceSlice = createSlice({
  name: 'campaignFinance',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaignFinanceData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCampaignFinanceData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(fetchCampaignFinanceData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default campaignFinanceSlice.reducer;
