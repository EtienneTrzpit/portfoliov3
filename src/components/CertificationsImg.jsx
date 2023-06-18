import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import sass from '../assets/certifications/sass.pdf'
import ReactPDF from '@react-pdf/renderer';

export default function CertificationsImg({image}) {

    const numero = image.numero

    return (
        <div className={numero} key={image.numero}>
            <div className='titles-projects'>
                <a href={sass} download={sass}>
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