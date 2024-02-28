import "./App.css";
import Review from "./components/Review/Review.jsx";
import Bookinfo from "./components/book-info/Book-info.jsx";
import Content from "./components/content/Content.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidecontent from "./components/sidecontent/Sidecontent.jsx";
import Bookactions from "./components/bookactions/Bookactions.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Bookinfo />

      {/* <Content />
      <Sidecontent />
      <Review/>
      <p>Hello, world!</p> */}
      <Footer />
      <Bookactions />
    </>
  );
}

export default App;
