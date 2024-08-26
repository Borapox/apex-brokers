import React from 'react';


// Explicação
// Interface BotaoProps: Define agora que o componente Botao espera uma prop chamada titleBtn do tipo string.
// Componente Botao: Recebe e usa a prop titleBtn para definir o texto do botão.
// Componente App: Passa a prop titleBtn com o valor "Clique Aqui" para o componente Botao.


// Interface: Em TypeScript, uma interface é usada para definir a forma de um objeto. Aqui, a interface BotaoProps define que o componente Botao espera receber uma prop chamada titleBtn do tipo string.
// titleBtn: É o nome da prop que o componente espera receber. Ela deve ser uma string.

interface BotaoProps {
  titleBtn: string;
}

const Botao: React.FC<BotaoProps> = ({ titleBtn }) => {
  return (
    <button className='cursor-pointer border bg-lime-400 hover:bg-lime-600 shadow-md transition duration-200 w-64 h-11 rounded-sm'>
      {titleBtn}
    </button>
  );
};

export default Botao;


