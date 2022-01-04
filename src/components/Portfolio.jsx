import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <a className="anchor" id="portfolio"></a>
        <h2 className="who-am-i">
          <span>Wie ben ik</span>
        </h2>
        <div className="portfolio">
          <div className="portfolio-row">
            <p>
              Een privé zweminstructeur kan u vergelijken met een fitness
              personal trainer maar dan actief in een aquatisch milieu. Hij
              begeleid intens, motiveert, grijpt in waar nodig, beschikt over
              het potentieel te zien wat er fout gaat, kent en ontwikkelt de
              juiste oefening.
            </p>
          </div>
          <div className="portfolio-column">
            <p className="portfolio-column-component">
              Ik ben Ivan Faes. Zweminstructie, werken met mensen, dat is mijn
              ding. Mijn hobby werd professioneel. Sinds 1980 ben ik actief in
              de zwemsport. Dat is al meer dan 40 jaar! Eerst tien jaar als
              competitiezwemmer, sinds 1987 als zwem-initiator en vanaf 1993 als
              zelfstandig zweminstructeur met mijn specialisatie in zwemles voor
              volwassen met in het bijzonder zero-starters en de basis voor
              degelijke crawl. Sinds 2011 ben ik oprichter en voorzitter van de
              vzw Swimcompany. Deze omvat een zwemschool en een
              niet-competitiegebonden crawlteam.
            </p>
            <p className="portfolio-column-component">
              In functie van mijn beroep ontwikkelde ik deze website met
              eenvoudige en eerlijke informatie over privé zwemlessen. Ik
              promoot de zwemsport en de gezonde voordelen hiervan maar ook de
              combinatie van zwemsport met gewichtstraining omdat dat naar mijn
              inzien zeer doeltreffender is om uw conditie en gezondheid te
              verbeteren en te onderhouden. Erkend lesgever Stad Antwerpen/Bloso
              Ex competitiezwemmer Hoger redder Resque diver
            </p>
          </div>
        </div>
      </div>
    );
  }
}
