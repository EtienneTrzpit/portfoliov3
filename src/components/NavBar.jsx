import '../index.css'
import { useState, useEffect } from 'react'

export default function NavBar() {

    const [activeItem, setActiveItem] = useState('item1');
    const handleItemClick = (item) => {
        setActiveItem(item);
    }

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY + 200;
            const presentation = document.getElementById('presentation').offsetTop;
            const projets = document.getElementById('projets').offsetTop;
            const certifications = document.getElementById('certifications').offsetTop;
            const savoirFaire = document.getElementById('savoir-faire').offsetTop;
            const contact = document.getElementById('contact').offsetTop;
            if (currentScrollY < presentation + 400) {
                setActiveItem('item1');
            } else if (currentScrollY >= presentation + 400 && currentScrollY < projets - 100) {
                setActiveItem('item3');
            } else if (currentScrollY >= projets -100 && currentScrollY < certifications - 100) {
                setActiveItem('item4');
            } else if (currentScrollY >= certifications - 100 && currentScrollY < savoirFaire -100) {
                setActiveItem('item2');
            } else if (currentScrollY >= savoirFaire -100 && currentScrollY < contact -100) {
                setActiveItem('item5');
            } 
        }
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])



    return (
        <nav className="navbar">
            <ul>
                <li className={activeItem === 'item1' ? 'active' : ''}>
                    <a onClick={() => handleItemClick('item1')} href="#presentation">
                        Présentation
                    </a>
                </li>
                <li className={activeItem === 'item3' ? 'active' : ''}>
                    <a onClick={() => handleItemClick('item3')}href="#projets">
                        Projets
                    </a>
                </li>
                <li className={activeItem === 'item4' ? 'active' : ''}>
                    <a onClick={() => handleItemClick('item4')} href="#certifications">
                        Certifications
                    </a>
                </li>
                <li className={activeItem === 'item2' ? 'active' : ''}>
                    <a onClick={() => handleItemClick('item2')} href="#savoir-faire">
                        Savoir-faire
                    </a>
                </li>
                <li className={activeItem === 'item5' ? 'active' : ''}>
                    <a onClick={() => handleItemClick('item5')} href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>  
    )
}