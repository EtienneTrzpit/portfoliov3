import photo from "../assets/images/photo-personnelle.avif";

export default function Presentation() {
  return (
    <>
      <h1 className="title">Intégrateur Web en développement en React</h1>
      <section className="presentation">
        <h2 className="presentation-text">Etienne Trzpit développeur</h2>
        <div className="bubble">
          <img className="picture" src={photo} alt="Photo personnelle" />
        </div>
      </section>
      <a className="anchor" id="savoir-faire"></a>
    </>
  );
}
