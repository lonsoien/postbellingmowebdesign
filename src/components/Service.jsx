import top from "../images/top64.png"; 

function Service() {
    return (
        <> 
            <h1 style={{ color: "white" }}>SERVICES</h1>
            <div className='borderline'></div>

            <div className="service">
                <div className="service-text">
                    <h4>Kjøp av nettside</h4>
                    <br/>
                    <p>
                    Det å kjøpe en ny nettside kan være til tider vanskelig og frustrerende. 
                    Hvilken type nettside trenger jeg for min bedrift, hvilket budsjett har jeg? 
                    Eller er du privat og ønsker en alternativ løsning for å syns online, men til en
                    rimelig pris? 
                    Kanskje har du mange følgere på ulike SoMe-kanaler, men er i behov for å profilere deg også med en nettløsning? </p>
                    <br/>
                    <p>
                    Det finnes mange gode enkle løsninger som gjør jobben for deg med å sette opp egen nettside som f.eks Wordpress, WIX, Webnode ect. 
                    Dette gjør deg nødvendigvis ikke til en digital designer, som kan triksene med å lage en visuell attraktiv og appellerende nettside. 
                    <br/>
                    Her på bellingmowebdesign kan du få et solid moderne webdesign, til en god pris og tilpasses deg og dine ønsker
                    uten å måtte gå veien til de større bedriftene, som raskt kan koste deg dyrt.
                    </p>
                    <br/>
                </div>
                <div className="service-text">
                    <h4>Hvordan kjøper jeg nettside?</h4>
                    <br/>
                    <p>
                    Send inn en uforpliktende forespørsel på 
                    <p style={{textDecoration: "underline",}}>postbellingmo@gmail.com. </p>
                    <br/>
                    Skriv gjerne litt om deg og/eller din bedrift, og forklar gjerne hva du ønsker på nettsiden. Har du en «identitet» eller «brand» som du vil uttrykke på nettsiden, isåfall forklar. «Med identitet så menes det formidlingen nettsiden skal ha og type innhold som gir informasjon til de besøkende på nettsiden din.» 
                    Andre spørsmål og henvendelser er også velkomne.
                </p>
                <br/>
                <p>
                Bilder, content og div materiel til nettsiden avtales i ettertid når du har 
                sendt forespørsel om hvilken type nettside som du ønsker å kjøpe. 
                Forespørsel vil bli besvart innen 1-3 dager. 
                </p>
                </div>
                <div className="service-text">
                    <h4>Type nettsider til Salg:</h4>
                    <br/>
                    <li><p>Egen utviklet nettside (ingen generell sjanger)</p></li>
                    <li><p> Business </p></li>
                    <li><p> Portfolio </p></li>
                    <li><p> Blog </p></li>
                    <li><p>Digital CV</p></li>
                    <br/>
                    <p>Alle nettsider er reponsive og utviklet for å tilpasses alle digitale skjermer som web (pc), 
                        tablets (nettbrett) og mobil (android/apple).</p>
                        <p>Nettsidene er kodet med React + Sanity.ios som headless CMS. Man vil få egen url  
                            til eget Studio Dashboard for å poste-innlegg/material på nettsiden.</p>
                        <p>Alle nettsider følger rettningslinjene for WCAG. Nettsidene inneholder metatags for
                         search engines som f.eks Google.</p>
                </div>
            </div>
                <div className="service">
                <div className="service-text">
                    <h4>Blog & Portfolio</h4>
                    <br/>
                    <p>Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                        Frontend kan endres uavgengig av content som er "postet" på nettsiden.  
                    </p>
                    <br/>
                    <p style={{textDecoration: "underline",}}>Pris 1499 - 2499 kr</p>
                   </div>
                   <div className="service-text">
                    <h4>Business nettside</h4>
                    <br/>
                    <p>
                        En business nettside passer best for de med en mindre bedrift som ønsker å markedsføre, informere og 
                        navigere sin foretning på nett, slik at man blir lett tilgjengelig. 
                        Med en business nettside har man flere funksjoner, innhold, og landingssider. Gjerne en hjemmeside med 1-3 ekstra
                        landingssider som f.eks informasjon om bedriften, kontakt detaljer, navigere til ulike tjenester og service 
                        man kan tilby sine kunder/klienter. 
                        Dette er også en fin måte å markedsføre sin foretnings identitet for å øke kundegruppen og veksten 
                        i selskapet. </p>
                    <br/>
                    <p style={{textDecoration: "underline",}}>Pris 2099 - 5099 kr</p>
                </div>
                   <div className="service-text">
                    <h4>Egen utviklet nettside</h4>
                    <br/>
                    <p>
                        Du kan også sende inn en forespørsel om få egen utviklet nettside etter ditt ønske.
                        Det vi gjør først er å planlegge og avtale aspekter som design, landingssider, div funksjonalitet,
                        innhold størrelse, fonts m.m. 
                        <br/>
                        Når vi er enige om identiteten og layouten starter selve designer prossesen. 
                        Dette kan ta alt fra 1-4 uker å utvikle prototypen. Her vil man ha muligheter for 
                        å delta i designer fasen for å gi feedback. Når man er fornøyd med resultatet går
                        man over til kodingen/utviklingen av selve nettsiden.
                        Dette tar også tid alt fra 2-4 uker. 
                    </p>
                    <br/>
                    <p style={{textDecoration: "underline",}}>Pris 3099 - 9999 kr</p>
                </div>
            </div>
            <div className="container-animation">
                <div className="select-button">
                    <a href="#id_top">TOP
                        <img src={top} alt="arrow" style={{width: "32px", margin: "2px"}}></img></a>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    )
}

export default Service; 