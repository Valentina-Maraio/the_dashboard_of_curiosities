import { configureStore } from "@reduxjs/toolkit";
import electionReducer from './slice/electionSlice';
import pollingReducer from './slice/pollingSlice';
import mediaCoverageReducer from './slice/mediaCoverageSlice';
import campaignFinanceReducer from './slice/campaignFinanceSlice';

export const store = configureStore({
    reducer: {
        election: electionReducer,
        polling: pollingReducer,
        mediaCoverage: mediaCoverageReducer,
        campaignFinance: campaignFinanceReducer,
    },
});