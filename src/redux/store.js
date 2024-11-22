import { configureStore } from "@reduxjs/toolkit";
import electionReducer from './slice/electionSlice';
import pollingReducer from './slice/pollingSlice';
import mediaCoverageReducer from './slice/mediaCoverageSlice';
import campaignFinanceReducer from './slice/campaignFinanceSlice';

//'routes'
import contentReducer from './slice/contentSlice';

export const store = configureStore({
    reducer: {
        election: electionReducer,
        polling: pollingReducer,
        mediaCoverage: mediaCoverageReducer,
        campaignFinance: campaignFinanceReducer,
        content: contentReducer,
    },
});