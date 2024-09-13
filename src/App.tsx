import { useCallback, useEffect, useReducer, useRef, useState } from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { ErrorBoundary } from "./components/ErrorBoundry";
import MainCompo from "./components/MainCompo";
import store from "./redux/store";
import { Provider } from "react-redux";

import MyComponent from "./components/MyComponent";
import useFecthData from "./components/useFecthData";

let timer: any;

interface State {
  count: number;
}

interface Action {
  type: "Increment" | "decremnt";
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "Increment":
      return state.count++;
    case "decremnt":
      return state.count--;
    default:
      return state;
  }
}

function App() {
  const { data, error, loading } = useFecthData(
    "https://jsonplaceholder.typicode.com/todos",
    "GET"
  );
  console.log(data, error, loading, "data19");

  async function fetchData(query: string) {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + query
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }

  const handleChange = (value: string) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fetchData(value);
    }, 1000);
  };

  return (
    <Provider store={store}>
      <CakeContainer />
      <ErrorBoundary>
        <MainCompo />
      </ErrorBoundary>
      <input
        onChange={(e) => {
          handleChange(e.target.value);
        }}
        placeholder="search..."
      />
      <MyComponent />

      <button
        onClick={() => {
          //@ts-ignore
          dispatch({ type: "Increment" });
        }}
      >
        -
      </button>
    </Provider>
  );
}

export default App;
