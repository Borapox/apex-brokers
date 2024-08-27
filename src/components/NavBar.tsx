import { MessageSquareMore , Bell, Plus, Printer, Settings } from "lucide-react"
import { SiExpertsexchange } from "react-icons/si"
import { Link } from "react-router-dom"

const NavBar = () => {

    function windowPrint() {
        window.print()
    }
  return (
    <>
    <div className="flex justify-between w-full ">
            
            
            <Link to={"/"} className=" ">
                <div className="flex">
                    <SiExpertsexchange 
                    className=" text-[45px] ml-5 text-[#263c47] transition duration-300 hover:text-[#01bdbf]"
                    />
                    <div className="flex flex-col justify-center items-center">
                        <h1 className="text-[#263c47] font-bold text-3xl ml-5 border-b-2 border-[#263c47]">
                            Apex Brokers
                        </h1>
                        <span className="text-[16px]">
                            Cresça Seu Capital!
                        </span>
                    </div>
                </div>
            </Link>
            

            <div className="flex justify-end">
                <div className="flex gap-10 w-80">
                        <button className="text-[#034858]">
                            <Plus className="size-8 hover:text-[#01bdbf] transition duration-400"/>
                        </button>

                        <button className="text-[#034858]">
                            <MessageSquareMore className="size-8 hover:text-[#01bdbf] transition duration-400"/>   
                        </button>

                        <button className="text-[#034858]">
                            <Printer className="size-8 hover:text-[#01bdbf] transition duration-400" onClick={windowPrint}/>
                        </button>

                        <button className="text-[#034858]">
                            <Bell className="size-8 hover:text-[#01bdbf] transition duration-400"/>
                        </button>

                </div>

                <div className="bg-[#01bdbf] rounded-full w-11 h-11 flex items-center justify-center text-white text-[40px] hover:bg-[#034858] transition duration-400 mr-5 cursor-pointer">
                    <button>
                        <Settings />
                    </button>
                </div>
            </div>

    </div>
    </>
  )
}

export default NavBar