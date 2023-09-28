import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <main>
          <Header />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="menu" element={<Menu />}/>
              <Route path="about" element={<About />}/>
            </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;