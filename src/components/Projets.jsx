import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'
import Booki from '../assets/Booki.jpg'
import RidingCities from '../assets/RidingCities.png'
import { useState } from 'react'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'
import ProjetsImg from './ProjetsImg'

const images = [
    {
        title: 'Riding Cities',
        subtitle: 'Projet HTML avec ajout de plusieurs sections',
        numero: 'projet1 projet',
        image: RidingCities
    },
    {
        title: 'Booki',
        subtitle: 'Projet HTML et CSS avec responsive design',
        numero: 'projet2 projet',
        image: Booki
    }
];

export default function Projets(){

    
    const [current, setCurrent] = useState(0)
    const length = images.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
return (
    <section className="cards projects">
        <div className='cards-header'>
            <FontAwesomeIcon icon={faCodeFork} size='2xl'/>
            <h2 className='cards-header-title'>Projets</h2>
        </div>
        <div className='cards-main'>
        {images.map((image, index) => {
            return (  
                <article className={index === current ? /*'cards-box box-projects*/ 'active' : 'cards-box box-projects box-hidden'} key={index}>
                    {index === current && (
                        <ProjetsImg image={image} />
                    )}
                </article>
            )
        })}
        <FontAwesomeIcon icon={faChevronCircleLeft} className="left-arrow" onClick={prevSlide}/>
        <FontAwesomeIcon icon={faChevronCircleRight} className="right-arrow" onClick={nextSlide}/>
        </div>
    </section>
)
}
