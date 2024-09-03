import { SetStateAction, useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
    { name: "Resumo da Conta", path: "/resumo-da-conta" },
    { name: "Investimentos", path: "/investimentos" },
    { name: "Plataformas", path: "/plataformas" },
    { name: "Educação e Suporte", path: "/educacao-suporte" },
    { name: "Transações", path: "/transacoes" },
    { name: "Configurações e Preferências", path: "/configuracoes-preferencias" },
];

const NavBarMenu = () => {

    const [activeItem, setActiveItem] = useState(menuItems[0].path); // Estado inicial no primeiro item

    const handleClick = (path: SetStateAction<string>) => {
        setActiveItem(path)
    }
  return (
    <div className="menu-container">
            {menuItems.map((item) => (
                <div
                    key={item.path}
                        className={`p-7 uppercase text-zinc-300 cursor-pointer 
                        ${activeItem === item.path ? 'bg-[#26475a]' : 'bg-[#024656] hover:bg-[#26475a]'}`}
                        onClick={() => handleClick(item.path)}>
                    <Link to={item.path}>
                        {item.name}
                    </Link>
                </div>
            ))}
        </div>
  )
}

export default NavBarMenu