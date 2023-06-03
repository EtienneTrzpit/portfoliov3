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
                <FontAwesomeIcon icon={faXmark} size="2xl" className='mark-menu' onClick={() => handleItemClick(false)} />
                <ul className='list-sections'>
                    <li onClick={() => handleItemClick(false)}>
                        <a href='#'>Présentation</a>
                    </li>
                    <li onClick={() => handleItemClick(false)}>
                        <a href='#'>Savoir-faire</a>
                    </li>
                    <li onClick={() => handleItemClick(false)}>
                        <a href='#'>Projets</a>
                    </li>
                    <li onClick={() => handleItemClick(false)}>
                        <a href='#'>Certifications</a>
                    </li>
                    <li onClick={() => handleItemClick(false)}>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}