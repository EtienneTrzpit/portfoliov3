import '../index.css'
import { useState } from 'react'

export default function NavBar() {

    const [activeItem, setActiveItem] = useState('item1');
    const handleItemClick = (item) => {
        setActiveItem(item);
      };
    
    return (
        <nav className="navbar">
            <ul>
                <li className={activeItem === 'item1' ? 'active' : ''} onClick={() => handleItemClick('item1')}>
                Présentation
                </li>
                <li className={activeItem === 'item2' ? 'active' : ''} onClick={() => handleItemClick('item2')}>
                Savoir-faire
                </li>
                <li className={activeItem === 'item3' ? 'active' : ''} onClick={() => handleItemClick('item3')}>
                Projets
                </li>
                <li className={activeItem === 'item4' ? 'active' : ''} onClick={() => handleItemClick('item4')}>
                Certifications
                </li>
                <li className={activeItem === 'item5' ? 'active' : ''} onClick={() => handleItemClick('item5')}>
                Contact
                </li>

            </ul>
        </nav>  
    )
}