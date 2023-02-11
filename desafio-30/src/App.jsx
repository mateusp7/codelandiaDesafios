import Header from "./Components/Header.jsx";
import background from "./assets/banner.png";
import rdrbg from "./assets/rdrlogo.png";
import List from "./Components/List.jsx";
import { ReactComponent as Search } from "./assets/search.svg";
import Banner1 from "./assets/1.png";
import Banner2 from "./assets/2.png";
import Banner3 from "./assets/3.png";
import Banner4 from "./assets/4.png";
import Footer from "./Components/Footer.jsx";

function App() {
  const list = [
    "NOVIDADES E TENDÊNCIAS",
    "CATEGORIAS",
    "LOJA DE PONTOS",
    "NOTICIAS",
    "LABORATORIO",
  ];
  return (
    <div>
      <Header />
      <div
        style={{
          background:
            "linear-gradient(266.12deg, rgba(14, 19, 30, 0) 0%, rgba(14, 19, 30, 0.7) 47.21%, rgba(14, 19, 30, 0.7) 86.62%, rgba(14, 19, 30, 0) 100%)",
          zIndex: 999,
        }}
      >
        <div
          className="relative"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "500px",
            zIndex: -1,
          }}
        />
      </div>
      <div style={{ zIndex: 999 }} className="absolute top-44 left-56">
        <img src={rdrbg} alt="RDR - Logo" />
        <p
          style={{ maxWidth: "36ch" }}
          className="text-white text-base mt-8 mb-8"
        >
          Estados Unidos, 1899. O fim da era do velho oeste começou, e as
          autoridades estão caçando as últimas gangues de fora da lei que
          restam. Os que não se rendem, nem sucumbem, são mortos.
        </p>
        <button className="bg-blue py-4 px-9 font-bold text-white rounded">
          COMPRE AGORA
        </button>
      </div>
      <ul className="flex flex-row items-center mt-8 gap-6 justify-center">
        <li className="h-[6px] w-16 bg-white rounded" />
        <li className="h-[6px] w-16 bg-blue rounded" />
        <li className="h-[6px] w-16 bg-white rounded" />
        <li className="h-[6px] w-16 bg-white rounded" />
      </ul>
      <div className="flex flex-col justify-center items-center mt-20 max-w-[900px] mx-auto">
        <div className="bg-dark200 py-7 px-10 mb-10 w-full">
          <List list={list} />
        </div>
        <div className="bg-dark200 py-5 px-10 mb-20 w-full">
          <div className="flex flex-row items-center">
            <h1 className="text-white">BUSCAR</h1>
            <div className="ml-auto">
              <Search />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-row gap-8 mb-20">
          <div>
            <img src={Banner1} alt="Banner 1" />
          </div>
          <div>
            <img src={Banner2} alt="Banner 2" />
          </div>
          <div>
            <img src={Banner3} alt="Banner 3" />
          </div>
          <div>
            <img src={Banner4} alt="Banner 4" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
