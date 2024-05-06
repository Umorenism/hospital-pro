import { About } from "./component/About";
import { Blog } from "./component/Blog";
import { Doctor } from "./component/Doctor";
import { Footer } from "./component/Footer";

import { Home } from "./component/Home";
import { Navbar } from "./component/Navbar";
import { Service } from "./component/Service";

export const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="service">
          <Service />
        </div>
        <div id="doctor">
          <Doctor />
        </div>
        <div id="blog">
          <Blog />
        </div>
      </main>
      <Footer />
    </div>
  );
};
