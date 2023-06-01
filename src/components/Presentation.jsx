import photo from '../assets/photo-personnelle.png';

export default function Presentation() {
    return (
        <article className="presentation">
            <div className='presentation-txt'>
                <h1 className="title">Etienne Trzpit</h1>
                <p className="subtitle">Intégrateur Web en développement en React</p>
            </div>
            <img className="presentation-img" src={photo} alt="Photo personnelle"/>
        </article>
    )
}