import { HashLink as Link } from "react-router-hash-link";
const Krachttraining = () => {
  return (
    <div className="program-container kracht">
      <Link className="go-back" to="/">
        <i className="bi bi-arrow-left"></i>
      </Link>

      <h2>Kracht</h2>
      <p>
        Deze begeleiding is gericht op krachttraining en dit enkel in
        functie/combinatie van de zwemlessen. De combinatie zwem- en
        krachttraining is bijzonder compleet en doeltreffend. Er wordt geoefend
        op kracht, stability en de psychomotorische coördinatie van uw
        musculatuur. Bepaalde spiergroepen gaan we geïsoleerd trainen en
        strechen in functie van uw zwemstijl. Prijs uur idem privé zwemles. U
        kan uw tienlessentarief combineren met zwemlessen. De lessen worden
        gegeven in samenwerking met Wezenberg fit.
      </p>
    </div>
  );
};

export default Krachttraining;
