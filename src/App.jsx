import "./App.css";
import Review from "./components/Review/Review.jsx";
import Conteudo from "./components/conteudo/conteudo.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Sidecontent from "./components/sidecontent/Sidecontent.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Conteudo />
      <Sidecontent />
      <Review/>
      <p>Hello, world!</p>
      <Footer />
    </>
  );
}

export default App;
