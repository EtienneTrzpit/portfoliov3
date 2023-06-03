import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export default function Header() {
    return(
        <header className='header-top'>
            <p className='name'>ETIENNE TRZPIT</p>
            <FontAwesomeIcon icon={faBars} size="4x" className='hamburger'/>
        </header>
    )
}