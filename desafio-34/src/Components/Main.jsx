import Button from "./Button.jsx";
import { ReactComponent as Image } from "../assets/image-1.svg";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Main = () => {
  return (
    <div
      className="grid grid-cols-2 pt-24 pb-24 max-w-[1200px]"
      style={{ margin: "0 auto" }}
    >
      <div>
        <h1 className="font-bold text-white text-6xl leading-[1.09]">
          Descubra e colete <br />
          <span className="font-bold bg-gradient-to-r from-[#FF8D8D] to-[#F7FC0E] bg-clip-text text-transparent text-6xl leading-[1.09]">
            obras de arte
          </span>{" "}
          <br />
          digitais super raras
        </h1>
        <p className="text-white text-xl font-light leading-8 mt-6 mb-12">
          O maior mercado NFT. Criação digital autêntica <br />e verdadeiramente
          única. Assinado e emitido pelo <br /> criador, possibilitado pela
          tecnologia blockchain
        </p>
        <Button text="EXPLORAR" />
      </div>
      <div className="gradient-border-pseudo">
        <div className="info left-8 top-8 flex items-center justify-center">
          <h1 className="text-white font-semibold">TOP 1</h1>
        </div>
        <div className="absolute -top-16 z-50 left-20">
          <Image />
        </div>
        <div className="box-content">
          <div className="absolute flex justify-between flex-row items-center left-8 bottom-14 right-8 top-4">
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-white">Apple Muu</h1>
              <p className="text-white opacity-70">By Steve Jobs</p>
              <div className="flex flex-row items-center">
                <Logo />
                <h1 className="text-white font-semibold text-xl">18 ETH</h1>
              </div>
            </div>
            <Button text="COMPRAR" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
