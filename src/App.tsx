import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavBarLeft from "./components/NavBarLeft";
import Card_Modal from "./components/card-modal/Card_Modal";
import Info_Card_User from "./components/card-modal/Info_Card_User";

export default function App() {
  return (
    <>
    <div className="w-full h-36 bg-white flex items-center bg-navImg bg-cover bg-center">
      <NavBar />
    </div>

    <div className="flex">

      <div className="bg-[#024656] w-80 h-screen">
        <NavBarLeft />
      </div>

      <div className="flex flex-col w-full">

          <div className="bg-[#7f8f9c] h-40 flex items-center ">
              
              <div className=" ml-5 border border-lime-400 w-1/4 flex justify-between">
              <Info_Card_User></Info_Card_User>

              <Info_Card_User></Info_Card_User>
              </div>

              <Link to={"/CreateAccount"}>CADASTRO</Link>
          </div>
          
          <div className="bg-gray-200 h-full p-10">
            
            <Card_Modal></Card_Modal>

          </div>

      </div>

    </div>

    
    </>
  )
}