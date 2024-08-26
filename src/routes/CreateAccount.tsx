import { SiExpertsexchange} from "react-icons/si";
import '@fontsource-variable/mulish';
import { Link } from "react-router-dom";

// import SingInCard from "../components/card-modal/SingInCard";
import { useState } from "react";
import { X } from "lucide-react";

import BtnForm from "../components/login-page/BtnForm";
import IsInfoUser from "../components/login-page/isInfoUser";
import IsRegisterAddress from "../components/login-page/IsRegisterAddress";
import IsFinancial from "../components/login-page/IsFinancial";

// Hook
import { userForm } from "../hooks/userForm";



const CreateAccount = () => {
  const formComponentes = [ <IsInfoUser />, <IsRegisterAddress />, <IsFinancial /> ];
  const { currentSteps, currentComponent } = userForm(formComponentes)


   // Função Modal Registro
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  function openCreateAccount() {
    return setIsCreateAccount(true);
  }
  function closeCreatelAccount() {
    return setIsCreateAccount(false);
  }


  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-gray-400 to-gray-200">
      <div className="flex items-center justify-center h-full w-full">
        <div className="flex justify-center items-center bg-gradient-to-t from-cyan-700 to-cyan-500 h-full w-96">
          <div className="text-5xl flex gap-2">
            <SiExpertsexchange />
            <span>Apex Brokers</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center bg-gradient-to-l from-[#171a1c] h-full w-full">
        <div className="flex flex-col justify-between items-center bg-[#17374d] h-full w-[600px]">
          <div className="w-full flex justify-center gap-5 uppercase text-sm mt-4 text-gray-400 font-bold">
            <Link to={"/"} className="hover:text-cyan-700">Central de Atendimento</Link>
            <Link to={"/"} className="hover:text-cyan-700">Serviços e Produtos</Link>
            <Link to={"/"} className="hover:text-cyan-700">Análises de Mercado</Link>
          </div>

          <div>
            <div className="flex flex-col items-center">
              <div className="text-5xl flex gap-2 font-bold text-white font-mulish">
                <span>
                  Cresça Seu Capital!
                </span>
              </div>
              <p className="text-base m-5 text-justify w-[500px] text-gray-400">
                Invista com segurança e confiança no futuro que você deseja construir. Na nossa corretora, oferecemos as melhores oportunidades para transformar suas aspirações 
                financeiras em realidade. Com expertise e inovação, guiamos você em cada passo, assegurando que suas decisões sejam fundamentadas e eficazes. Junte-se a nós e descubra 
                como alcançar seus objetivos no mercado de valores.
              </p>
            </div>

            <div className="h-96 flex flex-col">
                  <Link to={"/"} >
                    <button className="shadow-md shadow-gray-900 rounded-lg ml-5 bg-[#0681d4] w-72 h-16 font-bold text-gray-200 uppercase text-[14px] cursor-pointer hover:bg-[#245f80] transition duration-200">
                      Entrar
                    </button>
                  </Link>
              <div className="text-cyan-600 text-[12px] uppercase w-72 mt-2 text-center ml-5 flex">
                <button className="text-[12px] ml-5 uppercase cursor-pointer hover:underline hover:text-cyan-400" onClick={openCreateAccount}>
                  Cadastre-se
                </button>
                <button className="text-[12px] ml-5 uppercase cursor-pointer hover:underline hover:text-cyan-400">
                  Esqueceu sua senha
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isCreateAccount && (
        <div className="absolute z-50 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <div className="bg-gradient-to-t from-cyan-800 to-cyan-600 w-[1050px] h-[800px] shadow-xl shadow-gray-900">
                  <div className="flex justify-end">
                  <button onClick={closeCreatelAccount} className="font-bold m-5 hover:text-white transition duration-200">
                    <X />
                  </button>
                  </div>

                  <div className="flex items-center justify-evenly z-60">
                    <div className="text-5xl flex gap-2 mb-10">
                      <SiExpertsexchange />
                      <span>Apex Brokers</span>
                    </div>
                  </div>


                  <div className="flex gap-5 justify-center items-center mt-8 mb-8 h-8 uppercase text-gray-200 text-xl">
                    <a href="#" className="hover:text-black transition duration-500">Dados Pessoais</a>
                    <a href="#" className="hover:text-black transition duration-500">Endereço</a>
                    <a href="#" className="hover:text-black transition duration-500">Informações Financeiras</a>
                  </div>


                      {/* Div responsável pelos dados do formulário */}

                  <div className="h-[350px] w-[800px] border border-lime-400 m-auto p-5">
                  

                  </div>
                  <div className="flex justify-evenly mt-5">
                  <BtnForm></BtnForm>
                  <BtnForm></BtnForm>
                  </div>
          </div>
              
          
        </div>
      )}
    </div>
  );
}

export default CreateAccount;