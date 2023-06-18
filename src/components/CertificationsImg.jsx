import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default function CertificationsImg({image}) {

    const numero = image.numero

    return (
        <div className={numero} key={image.numero}>
            <div className='titles-projects'>
                <FontAwesomeIcon icon={faGithub} size='2x'/>
                <h3 className='cards-box-title '>
                <FontAwesomeIcon icon={image.title} size='4x'/>
                </h3>
            </div>
            
            <p>{image.subtitle}</p>         
        </div>
    )
}