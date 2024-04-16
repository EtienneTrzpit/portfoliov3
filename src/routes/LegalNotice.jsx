import "../index.css";
import HeaderAbout from "../components/HeaderAbout";
import FooterAbout from "../components/FooterAbout";

function LegalNotice() {
  return (
    <>
      <HeaderAbout />
      <main className="legal">
        <h1 className="legal__title">MENTIONS LÉGALES</h1>
        <h2 className="legal__title">
          Identification de l'éditeur et de l'hébergeur du site
        </h2>
        <h3 className="legal__title">Editeur :</h3>
        <p>
          Le site https://etiennetrzpit.com/ est édité par Etienne Trzpit, dont
          l’adresse postale est sis au 8 rue Georges, 92250 La Garenne-Colombes.
        </p>
        <h3 className="legal__title">Directeur de la publication :</h3>
        <p>
          Etienne Trzpit, joignable au 0695965016 ou à l'adresse
          etienne.trzpit@free.fr.
        </p>
        <h3 className="legal__title">Hébergeur :</h3>
        <p>
          Le site est hébergé par Netlify 44 Montgomery St STE 300, San
          Francisco, CA 94104, United States. Les informations concernant la
          collecte et le traitement des données personnelles (politique et
          déclaration) sont fournis dans la charte de données personnelles du
          site.
        </p>
      </main>
      <FooterAbout />
    </>
  );
}

export default LegalNotice;
