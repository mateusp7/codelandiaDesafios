import './App.scss'
import Header from './Components/Header.jsx';
import Section from './Components/Section.jsx';
import Main from "./Components/Main.jsx";
import Contato from './Components/Contato.jsx';
import Noticias from './Components/Noticias.jsx';
import Footer from './Components/Footer.jsx';

function App() {
  return (
    <div>
      <Header />
      <Section />
      <Main />
      <Contato />
      <Noticias />
      <Footer />
    </div>
  );
}

export default App
