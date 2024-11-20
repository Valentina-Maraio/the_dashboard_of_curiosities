"use client"

import { Provider as ReduxProvider } from 'react-redux';
import { Provider as TooltipProvider } from "@radix-ui/react-tooltip";
import { store } from '../redux/store'
import Page from "./dashboard/page";

export default function Home() {
  return (
    <ReduxProvider store={store}>
      <TooltipProvider>
        <Page />
      </TooltipProvider>
    </ReduxProvider>
  );
}