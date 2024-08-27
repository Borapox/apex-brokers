import { SiExpertsexchange, SiShutterstock} from "react-icons/si";
import '@fontsource-variable/mulish';
import { Link } from "react-router-dom";

// import SingInCard from "../components/card-modal/SingInCard";
import { SetStateAction, useState } from "react";
import { CalendarDays, LockKeyhole, Mail, UserPen, X } from "lucide-react";

import BtnForm from "../components/login-page/BtnForm";

import { AiOutlineFieldNumber, AiOutlineStock } from "react-icons/ai";
import { FaPersonHalfDress, FaHouseUser, FaRegAddressCard, FaCity } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { MdMyLocation, MdAttachMoney } from "react-icons/md";


const estados_UF = [
  "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
  "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
].sort();


const CreateAccount = () => {
  // Estado do Select UF
const [selectUf, setSelectUf] = useState('');

// Manipulador de Seleção de UF
function handleSelectUf(event: { target: { value: SetStateAction<string>; }; }) {
 setSelectUf(event.target.value);
}

   // Função Modal Registro
  const [isCreateAccount, setIsCreateAccount] = useState(false);

  function openCreateAccount() {
    return setIsCreateAccount(true);
  }
  function closeCreatelAccount() {
    return setIsCreateAccount(false);
  }

  const [isInfoUser, setIsInfoUser] = useState(true);

  function openUserInfo() {
    return (
      setIsInfoUser(true),
      setIsRegisterAddress(false),
      setIsFinancial(false)
    )
  }

  
  const [isRegisterAddress, setIsRegisterAddress] = useState(false);
    
  function openRegisterAdress() {
    return (
      setIsInfoUser(false),
      setIsRegisterAddress(true),
      setIsFinancial(false)
    );
  }

  const [isFinancial, setIsFinancial] = useState(false);

  function openFinancial(){
    return (
      setIsInfoUser(false),
      setIsRegisterAddress(false),
      setIsFinancial(true)
    )
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

                  <div className="bg-cyan-100 bg-opacity-40 p-5 rounded-md shadow-md flex flex-col">
                        
                          <div className="flex items-center justify-center flex-col">
                              <form action="" className="flex flex-col gap-5 mb-5">
                                <input 
                                    type="email" 
                                    name=""
                                    placeholder="email"
                                    className="outline-none p-2 rounded-sm flex-1"
                                />
                                <input 
                                    type="password"
                                    placeholder="senha"
                                    className="outline-none p-2 w-72 rounded-sm flex-1"
                                />
                              </form>
                              <Link to="/">
                                <BtnForm titleBtn="Entrar" />
                              </Link>
                          </div>
                        
                        <div className="text-black text-[12px] uppercase w-72 mt-2 text-center ml-5 flex">
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
                    <a href="#" className="hover:text-black transition duration-500" onClick={openUserInfo}>Dados Pessoais</a>
                    <a href="#" className="hover:text-black transition duration-500" onClick={openRegisterAdress}>Endereço</a>
                    <a href="#" className="hover:text-black transition duration-500" onClick={openFinancial}>Informações Financeiras</a>
                  </div>


                      {/* Div responsável pelos dados do formulário */}

          <div className="h-[350px] w-[800px] m-auto p-5">
          
          {isInfoUser && (
            <div className="flex justify-center items-center">
            <form action="" className="flex flex-col w-[750px] gap-5 text-cyan-800">
              {/* Nome - Sobrenome */}
              <div className="flex gap-5">
                <div className="flex items-center gap-4 flex-1">
                  <UserPen className="text-black text-2xl" />
                  <input 
                        type="text"
                        name="nome" 
                        placeholder="Nome" 
                        className="outline-none p-3 rounded-sm flex-1" />
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <UserPen className="text-black text-2xl" />
                  <input 
                        type="text" 
                        name="sobrenome" 
                        placeholder="Sobrenome" 
                        className="outline-none p-3 rounded-sm flex-1" />
                </div>
              </div>

              {/* CPF - Data de Nascimento */}
              <div className="flex gap-5">
                <div className="flex items-center gap-4 flex-1">
                  <AiOutlineFieldNumber className="text-black text-2xl" />
                  <input 
                        type="number" 
                        name="cpf" 
                        placeholder="CPF" 
                        className="outline-none p-3 rounded-sm flex-1" />
                </div>
                <div className="flex items-center gap-4 flex-1">
                  <CalendarDays className="text-black text-2xl" />
                  <input 
                        type="date" 
                        name="dataNascimento" 
                        placeholder="Data de Nascimento" 
                        className="outline-none p-3 rounded-sm flex-1" />
                </div>
              </div>

              {/* Gênero */}
              <div className="flex items-center gap-4">
                <FaPersonHalfDress  className="text-black text-2xl" />
                <select name="genero" className="outline-none p-3 rounded-sm flex-1">
                  <option value="">Selecione o Gênero</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              {/* E-mail */}
              <div className="flex items-center gap-4">
                <Mail className="text-black text-2xl" />
                <input
                        type="email"
                        name="email" 
                        placeholder="E-mail"
                        className="outline-none p-3 rounded-sm flex-1" />
              </div>

              {/* Senha */}
              <div className="flex items-center gap-4">
                <LockKeyhole className="text-black text-2xl" />
                <input 
                      type="password" 
                      minLength={8} 
                      name="senha" 
                      placeholder="Senha" 
                      className="outline-none p-3 rounded-sm flex-1" />
              </div>
            </form>
          </div>
          )}


          {isRegisterAddress &&(
            <div className="flex justify-center items-center">
              <form action="" className="flex flex-col w-[750px] gap-5 text-cyan-800">
                {/* Endereço */}
                <div className="flex items-center gap-4">
                  <FaHouseUser className="text-black text-2xl" />
                  <input 
                        type="text" 
                        name="endereco" 
                        placeholder="Endereço" 
                        className="outline-none p-3 rounded-sm flex-1" />
                </div>

                {/* Número - Complemento */}
                <div className="flex gap-5">
                  <div className="flex items-center gap-4 flex-1">
                    <AiOutlineFieldNumber className="text-black text-2xl" />
                    <input
                        type="number" 
                        name="cep" 
                        placeholder="CEP"
                        className="outline-none p-3 rounded-sm flex-1" />
                  </div>
                  <div className="flex items-center gap-4 flex-1">
                    <FaRegAddressCard className="text-black text-2xl" />
                    <input
                        type="text" 
                        name="complemento" 
                        placeholder="Complemento" 
                        className="outline-none p-3 rounded-sm flex-1" />
                  </div>
                </div>

                {/* Cidade - Estado */}
                <div className="flex gap-5">
                  <div className="flex items-center gap-4 flex-1">
                    <FaCity className="text-black text-2xl" />
                    <input 
                        type="text" 
                        name="cidade"
                        placeholder="Cidade"
                        className="outline-none p-3 rounded-sm flex-1" />
                  </div>

                  <div className="flex items-center gap-4 flex-1">
                    <MdMyLocation className="text-black text-2xl" />
                    <select name="estado" value={selectUf} onChange={handleSelectUf} className="outline-none p-3 rounded-sm flex-1">
                      <option value="">Selecione o Estado</option>
                      {estados_UF.map((uf) => (
                        <option key={uf} value={uf}>
                          {uf}
                        </option>
                      ))}
                    </select>

                  </div>
                </div>
              </form>
            </div>
      )}

        {isFinancial && (
        <div className="flex justify-center items-center">
            <div className="flex gap-5 flex-col">
                  <div className="flex gap-5">
                      <div className="flex items-center gap-4 flex-1">
                        <GrUserWorker  className="text-black text-2xl" />
                        <input 
                            type="text" 
                            name="profissao" 
                            placeholder="Profissão" 
                            className="outline-none p-3 rounded-sm w-[450px]" />
                      </div>

                      <div className="flex items-center gap-4 flex-1">
                        <MdAttachMoney  className="text-black text-2xl" />
                        <input 
                            type="number"
                            name="salario" 
                            placeholder="Salário" 
                            className="outline-none p-3 rounded-sm flex-1" />
                      </div>
                  </div>

                  <div className="flex items-center gap-4">
                      <SiShutterstock   className="text-black text-2xl" />
                      <select name="perfil" className="outline-none p-3 rounded-sm">
                        <option value="">Selecione seu perfil de investidor</option>
                        <option value="conservador">Conservador</option>
                        <option value="moderado">Moderado</option>
                        <option value="arrojado">Arrojado</option>
                      </select>
                  </div>

                  <div className="flex items-center gap-4">
                        <AiOutlineStock className="text-black text-2xl" />
                        <select name="perfil" className="outline-none p-3 rounded-sm">
                          <option value="">Selecione seu principal interesse como investidor</option>
                          <option value="dayTrade">Day Trade</option>
                          <option value="swingTrade">Swing Trade</option>
                          <option value="positionTrade">Position Trade</option>
                          <option value="rendaFixa">Renda Fixa</option>
                        </select>
                  </div>
            </div>

        </div>
        )}

          </div>
            <div className="flex justify-evenly mt-5">
              <BtnForm titleBtn="Anterior" />
              <BtnForm titleBtn="Próximo" />
            </div>
          </div>
              
          
        </div>
      )}
    </div>
  );
}

export default CreateAccount;