import { MessageSquareMore , Bell, Plus, Printer, Settings } from "lucide-react"

const NavBar = () => {
  return (
    <>
    <div className="flex justify-between w-full">

        <div>
            LOGO
        </div>

        <div className="text-[#263c47] font-bold text-3xl">
            Academic Dashboard
        </div>

        <div className="flex justify-end">
            <div className="flex gap-10 w-80">
                    <button className="text-[#034858]">
                        <Plus className="size-8 hover:text-[#01bdbf]"/>
                    </button>

                    <button className="text-[#034858]">
                        <MessageSquareMore className="size-8 hover:text-[#01bdbf]"/>   
                    </button>

                    <button className="text-[#034858]">
                        <Printer className="size-8 hover:text-[#01bdbf]"/>
                    </button>

                    <button className="text-[#034858]">
                        <Bell className="size-8 hover:text-[#01bdbf]"/>
                    </button>

            </div>
            <div className="bg-[#01bdbf] rounded-full w-11 h-11 flex items-center justify-center text-white text-[40px] hover:bg-[#034858] mr-5 cursor-pointer">
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