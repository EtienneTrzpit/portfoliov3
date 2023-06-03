import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Header() {

    const [activeMenu, setActiveMenu] = useState(false);
    const handleItemClick = (answer) => {
        setActiveMenu(answer);
    }
    return(
        <header>
            <nav className='header-top'>
                <p className='name'>ETIENNE TRZPIT</p>
                <FontAwesomeIcon icon={faBars} size="4x" className='hamburger' onClick={() => handleItemClick(true)} />
            </nav>
            <nav className={activeMenu ? 'hamburger-menu' : 'hamburger-menu-hidden'}>
                <FontAwesomeIcon icon={faXmark} onClick={() => handleItemClick(false)} />
                <ul className='list-sections'>
                    <li onClick={() => handleItemClick(false)}>Présentation</li>
                    <li onClick={() => handleItemClick(false)}>Savoir-faire</li>
                    <li onClick={() => handleItemClick(false)}>Projets</li>
                    <li onClick={() => handleItemClick(false)}>Certification</li>
                    <li onClick={() => handleItemClick(false)}>Contact</li>
                </ul>
            </nav>
        </header>
    )
}