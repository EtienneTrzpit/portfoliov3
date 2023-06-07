import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork } from '@fortawesome/free-solid-svg-icons'
import RidingCities from '../assets/RidingCities.png'
import Booki from '../assets/Booki.png'

export default function Projets() {
    return(
        <section className='cards projects'>
            <div className='cards-header'>
            <FontAwesomeIcon icon={faCodeFork} size='2xl'/>
                <h2 className='cards-header-title'>Projets</h2>
            </div>
            <div className='cards-main'>
                <section className='cards-columns columns-projects'>
                    <img src={RidingCities} alt='skateboard' className='img'/>
                    <h3 className='cards-columns-title titles-projects'>Riding Cities</h3>
                    <p>Projet HTML avec ajout de plusieurs sections</p>
                </section>
                <section className='cards-columns columns-projects'>
                    <img src={Booki} alt='logo Booki' className='img'/>
                    <h3 className='cards-columns-title titles-projects'>Booki</h3>
                    <p>Projet HTML avec ajout de plusieurs sections</p>
                </section>
            </div>
        </section>
    )
}