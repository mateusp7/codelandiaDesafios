import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  return (
    <header
      className="flex flex-row justify-between pt-10 items-center max-w-[1200px]"
      style={{ margin: "0 auto" }}
    >
      <div className="flex justify-center items-center gap-4">
        <Logo />
        <h1 className="text-white text-3xl">CodeNFT</h1>
      </div>
      <ul className="text-white flex flex-row gap-12 text-xl">
        <li className=" bg-white font-bold transition-all ease-in-out duration-300 hover:bg-gradient-to-r from-[#FF8D8D] to-[#F7FC0E] bg-clip-text text-transparent">
          <a href="#incio">Início</a>
        </li>
        <li className=" bg-white font-bold transition-all ease-in-out duration-300 hover:bg-gradient-to-r from-[#FF8D8D] to-[#F7FC0E] bg-clip-text text-transparent">
          <a href="#NFT">NFT</a>
        </li>
        <li className=" bg-white font-bold transition-all ease-in-out duration-300 hover:bg-gradient-to-r from-[#FF8D8D] to-[#F7FC0E] bg-clip-text text-transparent">
          <a href="#colecionadores">Colecionadores</a>
        </li>
        <li className=" bg-white font-bold transition-all ease-in-out duration-300 hover:bg-gradient-to-r from-[#FF8D8D] to-[#F7FC0E] bg-clip-text text-transparent">
          <a href="#Perguntas">Perguntas</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
