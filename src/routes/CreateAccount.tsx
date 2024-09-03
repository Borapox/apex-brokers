import { SiExpertsexchange, SiShutterstock } from "react-icons/si";
import '@fontsource-variable/mulish';
import { Link } from "react-router-dom";
import { useState } from "react";
import { CalendarDays, LockKeyhole, Mail, UserPen, X } from "lucide-react";
import BtnForm from "../components/login-page/BtnForm";
import { AiOutlineFieldNumber, AiOutlineStock } from "react-icons/ai";
import { FaPersonHalfDress, FaHouseUser, FaRegAddressCard, FaCity } from "react-icons/fa6";
import { GrUserWorker } from "react-icons/gr";
import { MdMyLocation, MdAttachMoney } from "react-icons/md";

// URL para a API onde os dados do usuário serão enviados
const url = "http://localhost:3000/users";

// Interface para tipar os dados do usuário
interface UserData {
  nome: string;
  sobrenome: string;
  cpf: string;
  dataNascimento: string;
  genero: string;
  email: string;
  senha: string;
  endereco: string;
  cep: string;
  complemento: string;
  cidade: string;
}

// Componente principal para criar a conta
const CreateAccount = () => {
  // Estados para armazenar os dados do formulário
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [genero, setGenero] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [endereco, setEndereco] = useState("");
  const [cep, setCep] = useState("");
  const [complemento, setComplemento] = useState("");
  const [cidade, setCidade] = useState("");

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Cria um objeto com os dados do usuário
    const userData: UserData = {
      nome,
      sobrenome,
      cpf,
      dataNascimento,
      genero,
      email,
      senha,
      endereco,
      cep,
      complemento,
      cidade,
    };

    try {
      // Envia os dados do usuário para a API
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      if (!res.ok) {
        throw new Error("Erro ao cadastrar usuário");
      }

      const result = await res.json();
      console.log("Usuário cadastrado com sucesso:", result);

      // Limpa os campos do formulário após o envio bem-sucedido
      setNome("");
      setSobrenome("");
      setCpf("");
      setDataNascimento("");
      setGenero("");
      setEmail("");
      setSenha("");
      setEndereco("");
      setCep("");
      setComplemento("");
      setCidade("");

    } catch (error) {
      console.error("Erro:", error);
    }
  }

  // Lista de estados (UF) para o dropdown
  const estados_UF = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
    "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
  ].sort();

  // Estado para armazenar a UF selecionada
  const [selectUf, setSelectUf] = useState('');

  // Manipulador para a seleção de UF
  const handleSelectUf = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectUf(event.target.value);
  }

  // Estado para controlar a visibilidade dos formulários
  const [isCreateAccount, setIsCreateAccount] = useState(false);
  const [isInfoUser, setIsInfoUser] = useState(true);
  const [isRegisterAddress, setIsRegisterAddress] = useState(false);
  const [isFinancial, setIsFinancial] = useState(false);

  // Funções para abrir e fechar os diferentes formulários
  const openCreateAccount = () => setIsCreateAccount(true);
  const closeCreateAccount = () => setIsCreateAccount(false);
  const openUserInfo = () => {
    setIsInfoUser(true);
    setIsRegisterAddress(false);
    setIsFinancial(false);
  }
  const openRegisterAddress = () => {
    setIsInfoUser(false);
    setIsRegisterAddress(true);
    setIsFinancial(false);
  }
  const openFinancial = () => {
    setIsInfoUser(false);
    setIsRegisterAddress(false);
    setIsFinancial(true);
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
                <span>Cresça Seu Capital!</span>
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
                        placeholder="E-mail"
                        className="outline-none p-2 rounded-sm flex-1 text-cyan-800"
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        className="outline-none p-2 w-72 rounded-sm flex-1 text-cyan-800"
                    />
                  </form>
                  <Link to="/">
                    <BtnForm titleBtn="Entrar" />
                  </Link>
                </div>

                <div className="text-black text-[12px] uppercase w-72 mt-2 text-center ml-5 flex">
                  <button className="text-[12px] ml-5 uppercase cursor-pointer  hover:underline hover:text-cyan-400" onClick={openCreateAccount}>
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

      {/* Modal de criação de conta */}
      {isCreateAccount && (
        <div className="absolute z-50 w-full h-full bg-gray-800 bg-opacity-90 flex items-center justify-center">
          <div className="bg-gradient-to-t from-cyan-800 to-cyan-600 w-[1050px] h-[800px] shadow-xl shadow-gray-900">
            <div className="flex justify-end">
              <button onClick={closeCreateAccount} className="font-bold m-5 hover:text-white transition duration-200">
                <X />
              </button>
            </div>

            <div className="flex items-center justify-evenly z-60">
              <div className="text-5xl flex gap-2 mb-10">
                <SiExpertsexchange />
                <span>Apex Brokers</span>
              </div>
            </div>

            <div className="flex gap-5 justify-center items-center mt-8 mb-8 h-8 uppercase text-gray-400 font-bold">
              <button
                className={`flex-1 py-2 text-center rounded-md ${isInfoUser ? "bg-cyan-300 text-cyan-800" : "bg-[#1b3e62] hover:bg-[#1b2f45] text-gray-300"} font-bold`}
                onClick={openUserInfo}
              >
                Dados Pessoais
              </button>
              <button
                className={`flex-1 py-2 text-center rounded-md ${isRegisterAddress ? "bg-cyan-300 text-cyan-800" : "bg-[#1b3e62] hover:bg-[#1b2f45] text-gray-300"} font-bold`}
                onClick={openRegisterAddress}
              >
                Endereço
              </button>
              <button
                className={`flex-1 py-2 text-center rounded-md ${isFinancial ? "bg-cyan-300 text-cyan-800" : "bg-[#1b3e62] hover:bg-[#1b2f45] text-gray-300"} font-bold`}
                onClick={openFinancial}
              >
                Financeiro
              </button>
            </div>

            {/* Formulário de Dados Pessoais */}
            {isInfoUser && (
              <form onSubmit={handleSubmit} className="flex flex-col p-5 gap-3">
                <div className="flex flex-wrap gap-5 mb-5">
                  <div className="flex flex-col">
                    <label className="flex items-center text-sm text-gray-300 font-semibold">
                      <FaPersonHalfDress className="mr-2" />
                      Nome
                    </label>
                    <input
                      type="text"
                      value={nome}
                      onChange={(e) => setNome(e.target.value)}
                      className="outline-none p-2 rounded-sm text-cyan-800"
                      placeholder="Nome"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="flex items-center text-sm text-gray-300 font-semibold">
                      <FaPersonHalfDress className="mr-2" />
                      Sobrenome
                    </label>
                    <input
                      type="text"
                      value={sobrenome}
                      onChange={(e) => setSobrenome(e.target.value)}
                      className="outline-none p-2 rounded-sm text-cyan-800"
                      placeholder="Sobrenome"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-5 mb-5">
                  <div className="flex flex-col">
                    <label className="flex items-center text-sm text-gray-300 font-semibold">
                      <AiOutlineFieldNumber className="mr-2" />
                      CPF
                    </label>
                    <input
                      type="text"
                      value={cpf}
                      onChange={(e) => setCpf(e.target.value)}
                      className="outline-none p-2 rounded-sm text-cyan-800"
                      placeholder="CPF"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="flex items-center text-sm text-gray-300 font-semibold">
                      <CalendarDays className="mr-2" />
                      Data de Nascimento
                    </label>
                    <input
                      type="date"
                      value={dataNascimento}
                      onChange={(e) => setDataNascimento(e.target.value)}
                      className="outline-none p-2 rounded-sm text-cyan-800"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-5">
                  <label className="flex items-center text-sm text-gray-300 font-semibold">
                    <UserPen className="mr-2" />
                    Gênero
                  </label>
                  <select
                    value={genero}
                    onChange={(e) => setGenero(e.target.value)}
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    required
                  >
                    <option value="">Selecione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Feminino">Feminino</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>

                <div className="flex flex-col mb-5">
                  <label className="flex items-center text-sm text-gray-300 font-semibold">
                    <Mail className="mr-2" />
                    E-mail
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    placeholder="E-mail"
                    required
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <label className="flex items-center text-sm text-gray-300 font-semibold">
                    <LockKeyhole className="mr-2" />
                    Senha
                  </label>
                  <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    placeholder="Senha"
                    required
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <BtnForm titleBtn="Continuar" />
                </div>
              </form>
            )}

            {/* Formulário de Endereço */}
            {isRegisterAddress && (
              <form onSubmit={handleSubmit} className="flex flex-col p-5 gap-3">
                <div className="flex flex-col mb-5">
                  <label className="flex items-center text-sm text-gray-300 font-semibold">
                    <FaHouseUser className="mr-2" />
                    Endereço
                  </label>
                  <input
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    placeholder="Endereço"
                    required
                  />
                </div>

                <div className="flex flex-wrap gap-5 mb-5">
                  <div className="flex flex-col">
                    <label className="flex items-center text-sm text-gray-300 font-semibold">
                      <MdMyLocation className="mr-2" />
                      CEP
                    </label>
                    <input
                      type="text"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      className="outline-none p-2 rounded-sm text-cyan-800"
                      placeholder="CEP"
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="flex items-center text-sm text-gray-300 font-semibold">
                      <FaCity className="mr-2" />
                      Cidade
                    </label>
                    <input
                      type="text"
                      value={cidade}
                      onChange={(e) => setCidade(e.target.value)}
                      className="outline-none p-2 rounded-sm text-cyan-800"
                      placeholder="Cidade"
                      required
                    />
                  </div>
                </div>

                <div className="flex flex-col mb-5">
                  <label className="flex items-center text-sm text-gray-300 font-semibold">
                    <MdAttachMoney className="mr-2" />
                    Complemento
                  </label>
                  <input
                    type="text"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    placeholder="Complemento"
                    required
                  />
                </div>

                <div className="flex flex-col mb-5">
                  <label className="flex items-center text-sm text-gray-300 font-semibold">
                    <AiOutlineStock className="mr-2" />
                    UF
                  </label>
                  <select
                    value={selectUf}
                    onChange={handleSelectUf}
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    required
                  >
                    <option value="">Selecione</option>
                    {estados_UF.map((uf) => (
                      <option key={uf} value={uf}>
                        {uf}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-center mt-5">
                  <BtnForm titleBtn="Continuar" />
                </div>
              </form>
            )}

            {/* Formulário Financeiro */}
            {isFinancial && (
              <form onSubmit={handleSubmit} className="flex flex-col p-5 gap-3">
                {/* Adicione aqui os campos do formulário financeiro */}
                <div className="flex flex-col mb-5">
                  <label className="flex items-center text-sm text-gray-300 font-semibold">
                    <MdAttachMoney className="mr-2" />
                    Informações Financeiras
                  </label>
                  <input
                    type="text"
                    placeholder="Detalhes financeiros"
                    className="outline-none p-2 rounded-sm text-cyan-800"
                    required
                  />
                </div>

                <div className="flex justify-center mt-5">
                  <BtnForm titleBtn="Finalizar" />
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateAccount;
