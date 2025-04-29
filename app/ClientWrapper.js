"use client";

import { Provider } from "react-redux";
import { store } from "./RTK/store";

export default function ClientWrapper({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
