import { Container } from "react-bootstrap";
//import "../bootstrap/dist/css/bootstrap.css";

import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import imageUrls from "./components/data.json";

function App() {
  return (
    <Container>
      <Header title="Beast Judge" />
      <Main message="Make your Beast Opinion Known" imageUrls={imageUrls} />
      <Footer text="Your Opinion Counts!" />
    </Container>
  );
}

export default App;
