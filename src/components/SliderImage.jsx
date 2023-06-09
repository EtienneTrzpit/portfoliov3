import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

export default function SliderImage({image}) {

    const numero = image.numero

    return (
        <div className={numero} key={image.numero}>
            <h3 className='cards-box-title titles-projects'>{image.title}</h3>
            <p>{image.subtitle}</p>         
        </div>
    )
}