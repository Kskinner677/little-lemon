import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
import About from "./components/About";
import Reservations from "./components/Revervations";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import '@fontsource/markazi-text/700.css';
import '@fontsource/karla/600.css';
import Checkout from "./components/Checkout";

function App() {

  const theme = extendTheme({
    fonts: {
      heading: "Markazi Text",
      body: "Karla",
    },
    colors: {
      brand: {
        primary: {
          green: "#495e57",
          yellow: "#f4ce14",
        },
        secondary: {
          salmon: "#ee9972",
          biege: "#fbdabb",
        },
        highlight: {
          light: "#edefee",
          dark: "#333333"
        },
      }
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <main>
          <Header />
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="menu" element={<Menu />}/>
              <Route path="about" element={<About />}/>
              <Route path="reservations" element={<Reservations/>}/>
              <Route path="checkout" element={<Checkout/>}/>
            </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;