
import { useState } from 'react'
import { AiOutlineStock } from 'react-icons/ai'
import { GrUserWorker } from 'react-icons/gr'
import { MdAttachMoney } from 'react-icons/md'
import { SiShutterstock } from 'react-icons/si'

const IsFinancial = () => {

  const [isFinancial, setIsFinancial] = useState(false);

  function openFinancial(){
    return (
      setIsFinancial(true)
    )
  }


  return (
    <div>
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
  )
}

export default IsFinancial