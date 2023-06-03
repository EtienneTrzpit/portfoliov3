import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return(
        <header className='header-top'>
            <p>ETIENNE TRZPIT</p>
            <FontAwesomeIcon icon={faBars} />
        </header>
    )
}