import React from "react";
import { GlobalStyle } from "./GlobalStyle";
import { CalculatorPage } from "./Page/Calculator";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { CalculatorProvider } from "./Provider/Calculator";

function App() {
  return (
    <CalculatorProvider>
      <GlobalStyle />
      <ToastContainer position="top-right" autoClose={2000} theme="light" />
      <CalculatorPage />
    </CalculatorProvider>
  );
}

export default App;
