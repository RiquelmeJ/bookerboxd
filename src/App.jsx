import "./App.css";
import Review from "./components/Review/Review.jsx";
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Content />
      <Review/>
      <p>Hello, world!</p>
      <Footer />
    </>
  );
}

export default App;
