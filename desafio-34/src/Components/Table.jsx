import Button from "../Components/Button.jsx";
import Profile1 from "../assets/profile-1.svg";
import Profile2 from "../assets/profile-2.svg";
import Profile3 from "../assets/profile-3.svg";
import Profile4 from "../assets/profile-4.svg";

const Table = () => {
  return (
    <div
      className="max-w-[1200px]"
      style={{ margin: "0 auto" }}
    >
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-white font-semibold text-4xl">Colecionadores</h1>
        <Button text="VER TODOS" />
      </div>
      <table className="mt-12 w-full">
        <tr className="flex flex-row justify-between items-center mb-16">
          <th className="text-white font-medium text-2xl">Colecionadores</th>
          <div className="flex flex-row gap-20 items-center">
            <th className="text-white font-medium text-2xl mr-20">Volume</th>
            <th className="text-white font-medium text-2xl">Piso</th>
            <th className="text-white font-medium text-2xl">Itens</th>
          </div>
        </tr>
        <tr className="flex flex-row justify-between mb-12">
          <td className="flex flex-row gap-3 items-center">
            <img className="rounded-lg w-12 h-12" src={Profile1} alt="" />
            <h1 className="text-white font-medium text-xl">Amanda</h1>
          </td>
          <div className="flex flex-row gap-28 items-center">
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                230.38 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+50.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                12.38 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+50.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">138</h1>
            </td>
          </div>
        </tr>
        <tr className="flex flex-row justify-between mb-12">
          <td className="flex flex-row gap-3 items-center">
            <img className="rounded-lg w-12 h-12" src={Profile2} alt="" />
            <h1 className="text-white font-medium text-xl">Fernando</h1>
          </td>
          <div className="flex flex-row gap-28 items-center">
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                189.25 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+48.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                12.38 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+40.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">119</h1>
            </td>
          </div>
        </tr>
        <tr className="flex flex-row justify-between mb-12">
          <td className="flex flex-row gap-3 items-center">
            <img className="rounded-lg w-12 h-12" src={Profile3} alt="" />
            <h1 className="text-white font-medium text-xl">Bruna</h1>
          </td>
          <div className="flex flex-row gap-28 items-center">
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                160.20 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+40.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                12.38 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+39.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">102</h1>
            </td>
          </div>
        </tr>
        <tr className="flex flex-row justify-between mb-12">
          <td className="flex flex-row gap-3 items-center">
            <img className="rounded-lg w-12 h-12" src={Profile4} alt="" />
            <h1 className="text-white font-medium text-xl">José</h1>
          </td>
          <div className="flex flex-row gap-28 items-center">
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                150.62 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+37.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">
                12.38 ETH
              </h1>
              <p className="text-yellow-400 font-medium text-right">+29.20%</p>
            </td>
            <td>
              <h1 className="text-white font-medium text-xl text-right">100</h1>
            </td>
          </div>
        </tr>
      </table>
    </div>
  );
};

export default Table;
