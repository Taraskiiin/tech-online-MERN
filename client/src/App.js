import { ChakraProvider } from "@chakra-ui/react";
import ProductsScreen from "./screens/ProductsScreen";
import LandingScreen from "./screens/LandingScreen";
import ProductScreen from "./screens/ProductScreen";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path={"/products"} element={<ProductsScreen />} />
            <Route path={"/product/:id"} element={<ProductScreen />} />
            <Route path={"/"} element={<LandingScreen />} />
          </Routes>
        </main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
