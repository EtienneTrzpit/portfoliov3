import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'

export default function CertificationsImg({image}) {

    const numero = image.numero

    return (
        <div className={numero} key={image.numero}>
            <div className='titles-projects'>
                <FontAwesomeIcon icon={faFileArrowDown} size='2x' className='download'/>
                <h3>
                <FontAwesomeIcon icon={image.title} size='4x' className='name-certification' />
                </h3>
            </div>       
            <p>{image.subtitle}</p>         
        </div>
    )
}