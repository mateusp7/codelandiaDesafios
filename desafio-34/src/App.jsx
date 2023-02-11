import Header from "./Components/Header.jsx";
import Main from "./Components/Main.jsx";
import './App.css'
import Section from "./Components/Section.jsx";
import Galery from "./Components/Galery.jsx";
import Table from "./Components/Table.jsx";
import Accordion from "./Components/Accordion.jsx";
import Rede from "./Components/Rede.jsx";
import Instagram from './assets/instagram.svg';
import Facebook from './assets/facebook.svg';
import Twitter from "./assets/twitter.svg";
import Email from "./assets/email.svg";

function App() {
  return (
    <div className="max-w-[1200px]" style={{ margin: "0 auto" }}>
      <Header />
      <Main />
      <Section />
      <Galery />
      <Table />
      <Accordion />
      <div className="flex flex-row items-center justify-center gap-6 pb-16">
        <Rede img={Instagram}  alt="Instagram"/>
        <Rede img={Facebook} alt="Facebook"/>
        <Rede img={Twitter} alt="Twitter"/>
        <Rede img={Email} alt="Email"/>
      </div>
    </div>
  );
}

export default App;
