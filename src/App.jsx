import { useState } from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

import Header from "./components/Header";
import AppRouter from "./navigation/AppRouter";
import theme from "./constants/theme";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <AppRouter />
    </ChakraProvider>
  );
}

export default App;
