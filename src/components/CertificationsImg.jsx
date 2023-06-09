import '../index.css'

export default function CertificationsImg({image}) {

    const numero = image.numero

    return (
        <div className={numero} key={image.numero}>
            <h3 className='cards-box-title titles-projects'>{image.title}</h3>
            <p>{image.subtitle}</p>         
        </div>
    )
}