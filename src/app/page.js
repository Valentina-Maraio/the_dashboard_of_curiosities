"use client"

import { Provider } from "@radix-ui/react-tooltip";
import { store } from '../redux/store'
import Page from "./dashboard/page";
import { Example } from "@/components/example";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Page />
        <Example />
      </Provider>
    </>
  );
}
