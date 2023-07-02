import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Service,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Service />
        <Tech />
        <Works />
      </div>
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
