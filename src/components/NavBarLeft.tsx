import { Link } from "react-router-dom"


const NavBarLeft = () => {

    let listLinks = [
        "Menu 1", "#",
        "Menu 2", "#",
        "Menu 3", "#",
        "Menu 4", "#",
    ]

  return (
    <div>
        <ul>
            {
                listLinks.map( (item, urlLink) => (
                    <li key={item}>
                        <Link to={`${urlLink}`}> Testes</Link>
                    </li>
                ))
            }
        </ul>


    </div>
  )
}

export default NavBarLeft