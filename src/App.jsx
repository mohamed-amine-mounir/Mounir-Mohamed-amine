import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "./components/index";
import {
  Header,
  Hero,
  About,
  Projects,
  Contact,
  Footer,
} from "./sections/index";

const App = () => {
  return (
    <>
      <Header />
      <Container />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};
//

//
export default App;
