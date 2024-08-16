import NavBar from "./components/NavBar";

export default function App() {
  return (
    <>
    <div className="w-full h-36 bg-white flex items-center">

      <NavBar />
    </div>

    <div className="flex">

      <div className="bg-[#24475a] w-80 h-screen">
        Menu 1
      </div>
      <div className="bg-[#7f8f9c] w-full h-40">
        Menu 2
      </div>
    </div>

    
    </>
  )
}