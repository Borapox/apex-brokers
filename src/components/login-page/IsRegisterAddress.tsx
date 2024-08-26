
import { SetStateAction, useState } from 'react';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { FaCity, FaHouseUser, FaRegAddressCard } from 'react-icons/fa'
import { MdMyLocation } from 'react-icons/md'


  // Seleção de Estados
  const estados_UF = [
    "AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MG", "MS", "MT",
    "PA", "PB", "PE", "PI", "PR", "RJ", "RN", "RO", "RR", "RS", "SC", "SE", "SP", "TO"
  ].sort();

 // Estado do Select UF
 const [selectUf, setSelectUf] = useState('');

 // Manipulador de Seleção de UF
 function handleSelectUf(event: { target: { value: SetStateAction<string>; }; }) {
   setSelectUf(event.target.value);
 }
 
 
const IsRegisterAddress = () => {

  const [isRegisterAddress, setIsRegisterAddress] = useState(false);
    
  function openRegisterAdress() {
    return (
        setIsRegisterAddress(true)
    );
  }


  return (
    <div>
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
    </div>
  )
}

export default IsRegisterAddress