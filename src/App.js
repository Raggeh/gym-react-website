import "./App.css";
import Header from "./Components/Header/Header";
import Exercises from "./Components/UI/Exercises";
import Footer from "./Components/UI/Footer";
import Hero from "./Components/UI/Hero";
import Pricing from "./Components/UI/Pricing";
import Start from "./Components/UI/Start";
import Testimonials from "./Components/UI/Testimonials";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Pricing />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
