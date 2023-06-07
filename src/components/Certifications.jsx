import '../index.css'

export default function Certifications() {
    return(
        <section className='cards certifications'>
            <div className='cards-header'>
                <h2 className='cards-header-title'>Certifications</h2>
            </div>
            <div className='cards-main'>
                <section className='cards-columns columns-certifications'>
                    <h3 className='cards-columns-title titles-certifications'>Simplifiez-vous le CSS avec Sass</h3>
                </section>
                <section className='cards-columns columns-certifications'>
                    <h3 className='cards-columns-title titles-certifications'>Créer votre site web avec HTML5 et CSS3</h3>
                </section>
            </div>
        </section>

    )
}