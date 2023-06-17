import '../index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Contact(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    function validateEmail(email){
        var emailReg = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/i);
        return emailReg.test(email);
    }

    function handleChange(e) {
        switch(e.target.name) {
            case 'name':
                setName(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'message':
                setMessage(e.target.value)
                break
            default:
                break
        }
    }

    function handleSubmit(e) {
        if (validateEmail(email)) {
            alert('Votre message a bien été envoyé')
        } else {
        e.preventDefault()
        alert('Veuillez entrer une adresse email valide')
        }
    }

    return(
        <section  ref={ref => props.cardRefs.current[3] = ref} className='cards contact' id='contact'>
            <div className='cards-header'>
                <FontAwesomeIcon icon={faEnvelope} size='2xl'/>
                <h2 className='cards-header-title'>Contact</h2>
            </div>
            <div className='cards-main contact-main'>
                <form onSubmit={handleSubmit} method='POST' data-netlify='true'>
                    <label htmlFor='name'>Nom</label>
                    <input type='text' id='name' name='name' placeholder='Nom' value={name} onChange={handleChange}required/>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={handleChange}required/>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' name='message' placeholder='Message' value={message} onChange={handleChange}required></textarea>
                    {/* formulaire de consentement RGPD */}
                    <div className='consentement'>
                        <input type='checkbox' id='consentement' name='consentement' required/>
                        <label htmlFor='consentement'>Je consens à ce que ce site stocke les informations que j’ai envoyées afin de pouvoir répondre à ma demande.</label>
                    </div>
                    <button type='submit'>Envoyer</button>
                </form>
            </div>
        </section>
    )
}