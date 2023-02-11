import { FaSteam } from "react-icons/fa";
import { ReactComponent as Notification } from "../assets/bell.svg";
import { ReactComponent as MessageCircle } from "../assets/message-circle.svg";
import { ReactComponent as Mateus } from "../assets/mateus.svg";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import { ReactComponent as Plus } from "../assets/plus.svg";
import { ReactComponent as Copy } from "../assets/copy.svg";
import { ReactComponent as Close } from "../assets/x.svg";
import List from "./List.jsx";

const Header = () => {
  const list = ["LOJA", "BIBLIOTECA", "COMUNIDADE", "AJUDA"];
  return (
    <header className="bg-dark200 py-5 px-10 w-full">
      <div className="flex flex-row items-center">
        <div className="mr-20">
          <FaSteam color="#ffffff" size={32} />
        </div>
        <List list={list} />
        <div className="flex flex-row items-center ml-auto">
          <div
            className="p-2 rounded-full mr-6 relative"
            style={{ background: "rgba(0, 148, 255, 0.24)" }}
          >
            <Notification />
            <div className="bg-blue rounded-full h-2 w-2 absolute top-0 right-1" />
          </div>
          <div className="mr-10">
            <MessageCircle />
          </div>
          <div className="flex flex-row items-center gap-2 mr-16">
            <div className="relative">
              <Mateus />
              <div className="bg-[#33FF00] rounded-full h-2 w-2 absolute bottom-0 right-1" />
            </div>
            <Arrow />
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <Plus />
          <Copy />
          <Close />
        </div>
      </div>
    </header>
  );
};

export default Header;
