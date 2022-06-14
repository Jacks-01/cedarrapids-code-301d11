/**
 * @file App.js
 * @date 2022-05-31
 * @author Code Fellows
 * @description Form the main content of the application
 * 
 */
import { Container } from "react-bootstrap";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import imageUrls from "./components/data.json";

/**
 * The function form of a React Component.  We can do this because we are
 * not using state variable.
 * 
 * @returns {Component}
 */
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
