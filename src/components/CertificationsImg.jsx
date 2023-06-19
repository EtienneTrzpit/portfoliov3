import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import sass from '../assets/certifications/sass.pdf'
import figma from '../assets/certifications/figma.pdf'
import react from '../assets/certifications/react.pdf'

export default function CertificationsImg({image}) {

    const numero = image.numero

    return (
        <div className={numero} key={image.numero}>
            <div className='titles-projects'>
                <a href={image.pdf} download={image.pdf}>
                <FontAwesomeIcon icon={faFileArrowDown} size='2x' className='download'/>
                </a>
                <h3>
                <FontAwesomeIcon icon={image.title} size='4x' className='name-certification' />
                </h3>
            </div>       
            <p>{image.subtitle}</p>         
        </div>
    )
}