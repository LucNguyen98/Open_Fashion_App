import { Provider } from "react-redux";
import React from "react";
import RootNavigator from "./routes/RootNavigator";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
}
