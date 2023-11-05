import React from "react";
import "./App.css";
import MyHeader from "./components/myHeader";
import MyFooter from "./components/myFooter";



function App() {
  return (
    
    // Composant principal
    <div className="App">



      {/* ==================== HEADER ==================== */}
      <MyHeader />



      {/* ==================== BODY ==================== */}

      {/* Conteneur des secions */}
      <div className="sections">

        {/* ---------- Section Introduction ---------- */}
        <section className="introduction-section">
          <div className="introduction-container">
            <h2>
              LA NOUVELLE NORME POUR TROUVER SON
              <span style={{ color: "#00FFE0" }}> ALTERNANCE</span>
            </h2>
            <br></br>
            <p>
              Je vous offre une expérience unique et personnalisée pour ma
              candidature impactante.
            </p>
            <br></br>
            <p id="little-text">
              Du bouton postuler sur Indeed à une nuit blanche sous caféine pour
              la création de ce site après 2 refus d'entretien, ma détermination
              est sans compter et mon seum est palpable de A à Z.
            </p>
            <div className="button-container">
              <a
                href="https://www.stevenyambos.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">ME CONTACTER</button>
              </a>
            </div>
          </div>
        </section>


        {/* ---------- Section Réseaux Sociaux ---------- */}
        <section className="social-media-section">
          <div className="social-media-container">
            <h2>REJOIGNEZ MES RÉSEAUX SOCIAUX</h2>
            <div className="social-media-icons">
              <a
                href="https://www.linkedin.com/in/steven-yambos/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../images/linkedin.svg"
                  alt="LinkedIn Steven YAMBOS"
                />
              </a>
              <a
                href="https://twitter.com/StevenYambos"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="../images/twitter_x.svg"
                  alt="Twitter X Steven YAMBOS"
                />
              </a>
              <a
                href="https://github.com/StevenYAMBOS?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                <img src="../images/github.svg" alt="GitHub Steven YAMBOS" />
              </a>
            </div>
          </div>
        </section>


        {/* ---------- Section Video ---------- */}
        <section className="video-section">
          <div className="video-container">
            <video controls poster="../images/SHOWREEL_MINIATURE.webp">
              <source src="../videos/SHOWREEL-2022.mp4" type="video/mp4" />
            </video>
          </div>
        </section>


        {/* ---------- Section Steven YAMBOS ---------- */}
        <section className="steven-yambos-section">
          <div className="steven-yambos-container">
            <div className="bloc1" style={{ textAlign: "center" }}>
              <h2 id="title">Steven YAMBOS</h2>
              <h2 id="sub-title">EN QUELQUES MOTS</h2>
              <p className="text">
                Je suis actuellement étudiant en Master 1 en développement Web à
                Paris :
              </p>
              <div className="button-container">
                <a
                  href="https://www.stevenyambos.fr/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button id="web-button" className="button">
                    Développement Web
                  </button>
                </a>
              </div>
            </div>

            <div className="bloc2">
              <p className="text">
                J'ai réalisé une première alternance en développement web, j'ai
                principalement travaillé sur la mise en place d'une page
                d’accueil en Vue.js. Cette expérience m'a permis de découvrir le
                développement web et de mettre en pratique mes compétences
                acquises durant formation.
              </p>
              <div className="button-container">
                <a
                  href="https://www.linkedin.com/in/steven-yambos-7392361b2/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button id="informations-button" className="button">
                    Plus d'informations
                    <img src="../images/arrow.svg" alt="arrow-icon" />
                  </button>
                </a>
              </div>
              <div className="button-container2">
                <a
                  href="https://www.linkedin.com/company/wearecomin/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button id="mobile-button" className="button">
                    Développement mobile
                  </button>
                </a>
              </div>
            </div>

            <div className="bloc3">
              <p className="text">
                Lors de ma seconde alternance, j'ai souhaité découvrir le
                développement mobile. J'ai participé au développement d'une
                application mobile en React Native (Typescript) sur Expo ainsi
                qu’AWS en Backend. Cette expérience m'a offert l'opportunité de
                contribuer à la réalisation complète d'une application, depuis
                sa conception jusqu'à son déploiement, et elle m'a également
                permis d'approfondir mes compétences en JavaScript.
              </p>
              <div className="button-container">
                <a
                  href="https://www.wearecomin.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button id="informations-button2" className="button">
                    Plus d'informations
                    <img src="../images/arrow.svg" alt="arrow-icon" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>


        {/* ---------- Section Engagements ---------- */}
        <section className="commitments-section">
          <div className="commitments-container">
            <h2 style={{ color: "white" }}>
              MES <span style={{ color: "#00FFE0" }}>ENGAGEMENTS</span>
            </h2>
            <div className="commitments">
              <span>Adaptabilité</span>
              <p>
                Je suis capable de m'adapter aux outils qui me sont données pour
                mener à bien mes missions.
              </p>
            </div>
            <hr></hr>
            <div className="commitments">
              <span>Détermination</span>
              <p>
                Je suis déterminé à atteindre mes objectifs et je fais preuve de
                persévérance face aux défis.
              </p>
            </div>
            <hr></hr>
            <div className="commitments">
              <span>Communication</span>
              <p>
                Je suis capable d'écouter activement les besoins de l'équipe et
                des clients, d'exprimer clairement mes idées et de collaborer
                efficacement.
              </p>
            </div>
          </div>
        </section>


        {/* ---------- Section Expertise ---------- */}
        <section className="expertise-section">
          <div className="expertise-container">
            <h2 style={{ margin: 10 }}>MON EXPERTISE</h2>
            <div id="front-end" className="expertises">
              <button className="expertise">React Native</button>
              <button className="expertise">Javascript</button>
              <button className="expertise">Typescript</button>
            </div>

            <div id="back-end" className="expertises">
              <button className="expertise">Python</button>
              <button className="expertise">Kotlin</button>
              <button className="expertise">SQL</button>
            </div>

            <div id="back-end" className="expertises">
              <button className="expertise">Git</button>
              <button className="expertise">Docker</button>
            </div>
          </div>
        </section>


        {/* ---------- Section Pourquoi moi ? ---------- */}
        <section className="why-me-section">
          <div className="why-me-container">
            <div className="title-qualities-container">
              <div className="why-me-title">
                <h3>
                  <i>Pourquoi me choisir</i>
                </h3>
              </div>
              <div className="qualities">
                <p>ÉCOUTE ET ADAPTABILITÉ</p>
                <p>SÉRIEUX</p>
                <p>PERSÉVÉRANT</p>
                <p>TRANSPARENT</p>
                <p>FORCE DE PROPOSITION</p>
                <p>TÉMÉRAIRE</p>
              </div>
            </div>
            <div id="button-container" className="button-container">
              <a
                href="https://www.stevenyambos.fr/"
                target="_blank"
                rel="noreferrer"
              >
                <button className="button">ME CONTACTER</button>
              </a>
            </div>
          </div>
        </section>
      </div> {/* fin BODY */}



      {/* ==================== FOOTER ==================== */}
      <MyFooter />



    </div> // fin Composant principal
  );
}

export default App;