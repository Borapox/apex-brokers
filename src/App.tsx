import { Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import NavBarLeft from "./components/NavBarMenu/NavBarMenu";
import Card_Modal from "./components/dashboard/dashboardCardLeft";
import Info_Card_User from "./components/dashboard/InfoUser";
import Card_Info_Modal from "./components/dashboard/dashboardCardRigth";

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

          <div className="bg-[#7f8f9c] h-52 flex items-center ">
              
              <div className=" ml-5 border border-lime-400 w-1/4 flex justify-between">
              <Info_Card_User></Info_Card_User>

              <Info_Card_User></Info_Card_User>
              </div>

              <Link to={"/CreateAccount"}>CADASTRO</Link>
          </div>
          
          <div className="bg-gray-200 h-full p-10 flex justify-between">
            
            <Card_Modal />
            <Card_Info_Modal />

          </div>

      </div>

    </div>

    
    </>
  )
}