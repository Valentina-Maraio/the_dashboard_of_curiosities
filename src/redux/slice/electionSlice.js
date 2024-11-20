import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import env from 'dotenv'

export const fetchElectionData = createAsyncThunk('election/fetchElectionData', async() => {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_CIVIC_API_KEY;
    const res = await fetch(`https://www.googleapis.com/civicinfo/v2/elections?key=${apiKey}`);
    const data = await res.json();
    return data.elections;
});

const electionSlice = createSlice({
    name: 'election',
    initialState: {
        elections: [],
        status: 'idle',
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchElectionData.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchElectionData.fulfilled, (state, action) => {
            state.status = 'succeded';
            state.elections = action.payload;
        })
        .addCase(fetchElectionData.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
    },
});

export default electionSlice.reducer;