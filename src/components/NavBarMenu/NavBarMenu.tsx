import { useState } from "react"
import { Link } from "react-router-dom"


const NavBarMenu = () => {
    // const [userAccountInfo, setUserAccountInfo] = useState;

    let listLinks = [
        "Resumo da Conta",
        "Investimentos  ",
        "Plataformas",
        "Educação e Suporte",
        "Transações",
        "Configurações e Preferências",
    ]

  return (

    <div>
        <ul>
            {
                listLinks.map( (item, urlLink) => (
                    <li 
                        key={item}
                        className="hover:bg-[#26475a] p-5 uppercase text-zinc-300 cursor-pointer">

                        <Link to={`${urlLink}`}>
                            {item}
                        </Link>

                    </li>
                ))
            }
        </ul>


    </div>
  )
}

export default NavBarMenu