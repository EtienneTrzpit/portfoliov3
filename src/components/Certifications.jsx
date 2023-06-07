import '../index.css'

export default function Certifications() {
    return(
        <section className='cards certifications'>
            <div className='cards-header'>
                <h2 className='cards-header-title'>Certifications</h2>
            </div>
            <div className='cards-main'>
                <article className='cards-box box-certifications'>
                    <h3 className='cards-box-title titles-certifications'>Simplifiez-vous le CSS avec Sass</h3>
                </article>
                <article className='cards-box box-certifications'>
                    <h3 className='cards-box-title titles-certifications'>Créer votre site web avec HTML5 et CSS3</h3>
                </article>
            </div>
        </section>

    )
}