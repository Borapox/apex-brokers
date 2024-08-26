import { CalendarDays, LockKeyhole, Mail, UserPen } from 'lucide-react'
import { useState } from 'react';

import { AiOutlineFieldNumber } from 'react-icons/ai'
import { FaPersonHalfDress } from 'react-icons/fa6'

const IsInfoUser = () => {

   // Função de Dados Pessoais
   const [isInfoUser, setIsInfoUser] = useState(true);

   function openUserInfo() {
     return (
       setIsInfoUser(true)
     )
   }

   
  return (
    <div>
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
    </div>
  )
}

export default IsInfoUser