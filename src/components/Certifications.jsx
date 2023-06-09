import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import CertificationsImg from './CertificationsImg'

const images = [
    {
        title: 'Sass',
        subtitle: 'Simplifiez-vous le CSS avec Sass',
        numero: 'certification1',
    },
    {
        title: 'Booki',
        subtitle: 'Projet HTML avec ajout de plusieurs sections',
        numero: 'certification2',
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
            <FontAwesomeIcon icon={faGraduationCap} size='2xl'/>
            <h2 className='cards-header-title'>Certifications</h2>
        </div>
        <div className='cards-main'>
        {images.map((image, index) => {
            return (  
                <article className={index === current ? /*'cards-box box-projects*/ 'active' : 'cards-box box-projects box-hidden'} key={index}>
                    {index === current && (
                        <CertificationsImg image={image} />
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