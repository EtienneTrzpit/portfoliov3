import photo from "../assets/images/photo-personnelle.avif";

export default function Presentation() {
  return (
    <article className="presentation">
      <div className="presentation__description">
        <p className="name">Etienne Trzpit</p>
        <h1 className="job">Intégrateur Web en développement en React</h1>
      </div>
      <img className="picture" src={photo} alt="Photo personnelle" />
    </article>
  );
}
