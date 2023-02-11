import GaleryPhoto1 from "../assets/GaleryPhoto1.png";
import GaleryPhoto2 from "../assets/GaleryPhoto2.png";
import GaleryPhoto3 from "../assets/GaleryPhoto3.png";

const Galery = () => {
  return (
    <article className="pb-28">
      <h1 className="text-white mb-12 font-semibold text-4xl text-center">
        TOP NFTs
      </h1>
      <div className="flex flex-row gap-8">
        <div>
          <img
            className="hover:scale-105 duration-300 ease-linear"
            src={GaleryPhoto1}
            alt="GaleryPhoto1"
          />
        </div>
        <div>
          <img
            className="hover:scale-105 duration-300 ease-linear"
            src={GaleryPhoto2}
            alt="GaleryPhoto2"
          />
        </div>
        <div>
          <img
            className="hover:scale-105 duration-300 ease-linear"
            src={GaleryPhoto3}
            alt="GaleryPhoto3"
          />
        </div>
      </div>
    </article>
  );
};

export default Galery;
