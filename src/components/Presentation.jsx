import photo from '../assets/images/photo-personnelle.png';

export default function Presentation() {
    return (
        <article className="presentation">
            <div className='presentation-txt'>
                <p className="subtitle">Etienne Trzpit</p>
                <h1 className="title">Intégrateur Web en développement en React</h1>
            </div>
            <img className="presentation-img" src={photo} alt="Photo personnelle"/>
        </article>
    )
}