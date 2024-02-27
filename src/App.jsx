import "./App.css";
import Conteudo from "./components/conteudo/Conteudo";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Conteudo />
      <p>Hello, world!</p>
      <Footer />
    </>
  );
}

export default App;
