import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Contact() {
    return(
        <section className='cards contact'>
            <div className='cards-header'>
                <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
                <h2 className='cards-header-title'>Contact</h2>
            </div>
            <div className='cards-main contact-main'>
                <form action='#' method='POST'>
                    <label htmlFor='name'>Nom</label>
                    <input type='text' id='name' name='name' placeholder='Nom' required/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Email' required/>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' placeholder='Message' required></textarea>
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        </section>
    )
}