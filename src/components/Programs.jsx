import React, { Component } from "react";
import ivan from "../pictures/ivan.jpg";
import {Link} from "react-router-dom"

export default class Programs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselVar1: 0,
      carouselVar2: 100,
    };
  }
  render() {
    return (
      <div className="programs">
        <a className="anchor" id="programs"></a>
        <h2>Onderdelen</h2>
        <div className="programs-container">
          <Link to="/zerostarter">
        <svg width="256px" className="program-button" height="256px" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
  <path d="M128,68c-14.43848,0-26.73047,7.44043-34.61328,20.95215C87.334,99.32715,84,113.19434,84,128c0,14.80371,3.334,28.6709,9.38672,39.04688C101.26953,180.55859,113.5625,188,128,188s26.73047-7.44141,34.61328-20.95312C168.666,156.6709,172,142.80371,172,128c0-14.80566-3.334-28.67285-9.38672-39.04785C154.73047,75.44043,142.43848,68,128,68Zm0,96c-15.82031,0-20-23.54883-20-36s4.17969-36,20-36,20,23.54883,20,36S143.82031,164,128,164Zm0-144A108,108,0,1,0,236,128,108.12186,108.12186,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09562,84.09562,0,0,1,128,212Z"/>
</svg>

            <p
              className="program-button-text"
              onClick={() =>
                this.setState({ carouselVar1: 0, carouselVar2: 100 })
              }
            >
              ZEROSTARTER
            </p>
          </Link>
          <Link to="/crawl">
            <svg
              className="program-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20.306 20.306"
              onClick={() =>
                this.setState({ carouselVar1: 0, carouselVar2: 100 })
              }
            >
              <g>
                <path d="M7.816 10.297c1.197.148 2.314.529 3.35 1.008.503.235 1.04.542 1.461.782.422.248.85.473 1.282.691l-2.624-5.195-.555-.975-1.959-3.431A1.01 1.01 0 107.018 4.18l2.166 3.797-.555.492-3.31 1.888-.077.042a7.839 7.839 0 012.574-.102z" />
                <circle cx={14.955} cy={8.194} r={2.179} />
                <path d="M20.161 12.613c-.309 1.027-.797 1.98-1.492 2.473-.677.492-1.448.523-2.298.352-.848-.176-1.726-.541-2.586-.975a21.624 21.624 0 01-1.288-.693c-.42-.24-.959-.547-1.461-.781-1.035-.479-2.152-.861-3.351-1.01-1.189-.148-2.469-.051-3.623.408a6.392 6.392 0 00-2.817 2.174C.578 15.502.116 16.547 0 17.639c1.297-1.719 2.953-2.951 4.67-3.238 1.712-.314 3.495.201 5.224 1.014.451.205.83.412 1.326.678.5.25 1.01.494 1.535.699 1.054.406 2.188.74 3.438.748.62.002 1.278-.084 1.901-.342a3.477 3.477 0 001.55-1.227c.714-1.092.787-2.307.517-3.358z" />
              </g>
            </svg>
            <p
              className="program-button-text"
              onClick={() =>
                this.setState({ carouselVar1: 0, carouselVar2: 100 })
              }
            >
              CRAWL/TRIATLON
            </p>
          </Link>
          <Link to="/kracht">
            <svg
              className="program-button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M511.539 276.606a71.613 71.613 0 00-3.122-20.686l-35.335-115.096c-3.753-12.223-16.649-19.143-28.909-15.514l-38.987 11.544c-8.478 2.509-14.263 9.722-15.391 17.947l36.822-9.593-53.965 30.189-42.491-21.811a60.329 60.329 0 01-19.811 26.38l56.377 28.91c.003.002.008.003.011.006 4.594 2.354 10.448 2.449 15.328-.269l.023-.011 58.32-33.678-36.47 34.494 19.204 64.89-28.521 72.853a19.597 19.597 0 00-1.211 9.457l10.258 86.381c1.276 10.748 11.021 18.428 21.775 17.152 10.749-1.276 18.429-11.026 17.151-21.775l-9.678-81.501 29.365-75.008 10.064-2.979.451 161.854c.03 10.806 8.799 19.546 19.6 19.546h.055c10.824-.03 19.576-8.83 19.546-19.655-.001-1.4-.296-110.43-.459-164.027z" />
              <circle cx={412.669} cy={85.729} r={34.018} />
              <path d="M304.291 290.551a17.942 17.942 0 00-14.456-17.483v-82.983a59.858 59.858 0 01-31.516 0v83.636l-94.498 3.496-17.652-47.107a18.352 18.352 0 00-31.559-4.971l-71.573 90.156c-6.302 7.938-4.975 19.482 2.962 25.784 7.938 6.301 19.484 4.976 25.784-2.963l51.399-64.744 19.844 52.629a30.58 30.58 0 0028.746 19.79l114.911-.505c9.937-.061 17.948-8.179 17.874-18.119l-.266-36.616z" />
              <circle cx={354.332} cy={310.133} r={34.008} />
              <path d="M274.078 85.796c-25.598 0-46.349 20.751-46.349 46.349 0 25.598 20.751 46.349 46.349 46.349 25.598 0 46.349-20.751 46.349-46.349s-20.751-46.349-46.349-46.349zm0 71.76c-14.012 0-25.411-11.4-25.411-25.411 0-14.012 11.4-25.411 25.411-25.411s25.411 11.4 25.411 25.411c0 14.012-11.398 25.411-25.411 25.411z" />
              <path d="M274.078 118.155c-7.713 0-13.99 6.277-13.99 13.992 0 7.715 6.276 13.99 13.99 13.99 7.715 0 13.99-6.276 13.99-13.99.001-7.715-6.276-13.992-13.99-13.992zM365.257 363.818H14.275C6.391 363.818 0 370.208 0 378.092s6.391 14.275 14.275 14.275h350.982c7.883 0 14.275-6.391 14.275-14.275-.001-7.883-6.391-14.274-14.275-14.274z" />
            </svg>
            <p
              className="program-button-text"
              onClick={() => this.props.history}
            >
              KRACHTTRAINING
            </p>
          </Link>
        </div>
        {/* 400 */}
        <div
          className="programs-card"
          style={{
            position: "relative",
            width: 100 + "%",
            maxHeight: 200,
            overflow: "clip",
          }}
        ></div>
        <div>
          <div className="challenge-coach-card">
            <div className="coach-card-flex">
              <div style={{ flex: 1, textAlign: "left" }}>
                <p style={{fontWeight: "bolder"}}>INSTAPLES:</p>
                <ul style={{ paddingLeft: 0, display: "inline-block" }}>
                  <li>Kennismaking</li>
                  <li>Gesprek doelstelling</li>
                  <li>Theorie basis</li>
                  <li>Start oefeningen</li>
                  <li>Bespreking verder verloop</li>
                </ul>
              </div>
              <div style={{ flex: 1, textAlign: "left"}}>
                <p style={{fontWeight: "bolder"}}>BELANGRIJKE AFSPRAKEN VOOR DE LES:</p>
                <ul style={{paddingLeft: 0, display: "inline-block" }}>
                  <li>
                    Tien lessen met voorbetalingstarief starten op datum eerste
                    les en vervallen na één kalenderjaar te rekenen vanaf
                    startdatum eerste les.
                  </li>
                  <li>
                    Annulaties dienen per sms te gebeuren op nummer: +32 477 45
                    10 00
                  </li>
                  <li>
                    Indien u niet tijdig annuleert, binnen 24 uur voor
                    starttijd, wordt forfait gerekend.
                  </li>
                </ul>
              </div>
            </div>
            <p style={{ fontWeight: "bolder" }}>CHALLENGE MET UW COACH!</p>
            <div className="coach-container">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>
                  Dit is een challenge voor de volwassenen die van niveau nul
                  starten of voor diegenen die enkel de schoolslag beheersen en
                  als doel bijvoorbeeld na 1 jaar vlot crawl en rugslag wensen
                  te zwemmen. We stellen een persoonlijk doel op met wat u wenst
                  te bereiken met zwemles- en/of fitness coaching na 1 jaar. Dan
                  beginnen we te trainen.
                </p>
                <p
                  style={{
                    textAlign: "start",
                    fontWeight: "bolder",
                    marginLeft: 20,
                  }}
                >
                  Inbegrepen:
                </p>
                <ul style={{ textAlign: "start" }}>
                  <li>
                    1 initiatie/training van 1 uur of half uur/week met
                    uitzondering van officiële schoolvakanties{" "}
                  </li>
                  <li>Trainingsprogramma met aanpassingen</li>
                  <li>Onderwater camera analyse</li>
                  <li>Sportverzekering b.a.</li>
                </ul>
              </div>
              <img src={ivan} alt="coach" className="coach-image" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
