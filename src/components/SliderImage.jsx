import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleLeft} from '@fortawesome/free-solid-svg-icons'
import {faChevronCircleRight} from '@fortawesome/free-solid-svg-icons'

export default function SliderImage({image}) {

    return (
        <>
            <img src={image.image} alt={image.title} className='img'/>
            <h3 className='cards-box-title titles-projects'>{image.title}</h3>
            <p>{image.subtitle}</p>         
        </>
    )
}