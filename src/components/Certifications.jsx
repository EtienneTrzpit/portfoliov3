import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import CertificationsImg from './CertificationsImg'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'


const images = [
    {
        title: faSass,
        subtitle: 'Simplifiez-vous le CSS avec Sass',
        numero: 'certification',
        pdf: 'sass.pdf',
    },
    {
        title: faReact,
        subtitle: 'Débutez avec React',
        numero: 'certification',
        pdf: 'react.pdf',
    },
    {
        title: faFigma,
        subtitle: 'Créez une maquette web avec Figma',
        numero: 'certification',
        pdf: 'figma.pdf',
    },
    {
        title: faCss3Alt,
        subtitle: 'Créez des animations CSS modernes',
        numero: 'certification',
        pdf: 'css3.pdf',
    }



];

export default function Certifications(props){

    
    const [current, setCurrent] = useState(0)
    const length = images.length
    
    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };
    
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };
return (
    <section  ref={ref => props.cardRefs.current[2] = ref} className="cards certifications" id='certifications'>
        <div className='cards-header'>
            <FontAwesomeIcon icon={faGraduationCap} size='2xl'/>
            <h2 className='cards-header-title'>Certifications</h2>
        </div>
        <div className='cards-main'>
        {images.map((image, index) => {
            return (  
                <article className={index === current ?  'certification-active' : 'cards-box box-projects box-hidden'} key={index}>
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