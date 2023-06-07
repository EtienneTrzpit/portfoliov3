import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons'
import { faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'

export default function SavoirFaire() {
    return(
        <section className='cards knowledge'>
            <div className='cards-header'>
                <FontAwesomeIcon icon={faBrain} size='2xl'/>
                <h2 className='cards-header-title'>Savoir-Faire</h2>
            </div>
            <div className='cards-main'>
                <section className='cards-box box-knowledge'>
                    <h3 className='cards-box-title titles-knowledge'>Front-End</h3>
                    <ul>
                        <li><FontAwesomeIcon icon={faHtml5} size='xl' className='knowledge-icons'/>HTML5 Sémantique</li>
                        <li><FontAwesomeIcon icon={faCss3Alt} size='xl' className='knowledge-icons'/>CSS3 Animation</li>
                        <li><FontAwesomeIcon icon={faSquareJs} size='xl' className='knowledge-icons'/>Javascript</li>
                        <li><FontAwesomeIcon icon={faSass} size='xl' className='knowledge-icons'/>Sass</li>
                    </ul>
                </section>
                <section className='cards-box box-knowledge'>
                    <h3 className='cards-box-title titles-knowledge'>Déploiement</h3>
                    <ul>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>VS Code</li>
                        <li>Netlify</li>
                    </ul>
                </section>
            </div>    
        </section>
        
    )
}