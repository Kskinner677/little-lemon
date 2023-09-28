import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";


function App() {
  return (
    <ChakraProvider>
        <main>
          <Header />
          <HeroSection />
          <Highlights />
          <Testimonials />
          <About />
          <Footer />
        </main>
    </ChakraProvider>
  );
}

export default App;