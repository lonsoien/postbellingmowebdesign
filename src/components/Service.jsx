function Service() {
    return (
        <>
            <h1 style={{ color: "white" }}>SERVICES</h1>
            <div className='borderline'></div>

            <div className="service">
                <div className="service-text">
                    <h4>Kjøp av nettside</h4>
                    <p>Alle nett-prototypene er ferdig kodet, lagret i Github og klare for å settes opp LIVE online
                        med en hosting service. Dette er i tillegg til prisen, og ligger alt mellom 99kr - 299kr 
                        pr år ut ifra hvilket type domene og hosting-service du bruker. Jeg foretrekker å bruke One.com. 
                       <p>Les mer om domene hos One.com </p>
                       <a href="https://one.com" style={{textDecoration: "underline", color: "white"}}>HER.</a>
                    </p>
                    <br/>
                    <p>Det er også mulig å sende inn en forespørsel på å få utviklet "egen-nettside-fra-scratch".
                        Hvilke funkskjoner, viruelt design og oppsett vil avgjøre størrelsen og prisen på prosjektet. 
                        Det vil være en designer-prosess før selve utviklingen og kodingen av nettsiden. 
                        Dette vil ta tid (3 - 8 uker), ut ifra hvor avansert nettsiden skal være. 
                    </p>
                    <br/>
                </div>
                <div className="service-text">
                    <h4>Hvordan kjøper jeg nettside?</h4>
                    <p>
                    Send inn forespørsel på postbellingmo@gmail.com. Skriv hvilken type layout du ønsker å kjøpe.
                    Om du ønsker div endringer så gjerne presiser det i mailen. Alle layout vil ha sine begrensninger 
                    for hva som kan endres, ut ifra funskjonalitet og type layout. Dette kan avtales på mail. Evt ekstra kostnader må påregnes. 
                </p>
                <br/>
                <p>
                Ønske om endringer, legge til bilder og annet materiel avtales i ettertid når du har 
                sendt forespørsel om hvilken layout som er ønskelig å kjøpe. 
                Forespørsel vil bli besvart innen 1-3 dager. 
                </p>
                </div>
                <div className="service-text">
                    <h4>Type nettsider til Salg:</h4>
                    <br/>
                    <li><p>Digital CV</p></li>
                    <li><p> Blog </p></li>
                    <li><p> Portfolio </p></li>
                    <li><p> Business </p></li>
                    <li><p> Egen utviklet nettside</p></li>
                    <br/>
                    <p>Alle nettsider er reponsive og utviklet for å tilpasses alle digitale skjermer som web (pc), 
                        tablets (nettbrett) og mobil (android/apple).</p>
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
                        Les mer om Sanity <a href="https://www.sanity.io" style={{textDecoration: "underline", color: "white"}}>HER.</a>
                    </p>
                    <br/>
                    <p style={{textDecoration: "underline",}}>Pris 1499 - 2499 kr</p>
                   <br/>
                   </div>
                   <div className="service-text">
                    <h4>Business nettside</h4>
                    <p>
                        En business nettside passer best for de med en mindre bedrift som ønsker å markedsføre, informere og 
                        navigere sin foretning på nett, slik at man blir lett tilgjengelig. 
                        Med en business nettside har man flere funksjoner, innhold, og landingssider. Gjerne en hjemmeside med 1-3 ekstra
                        landingssider som f.eks informasjon om bedriften, kontakt detaljer, navigere til ulike tjenester og service 
                        man kan tilby sine kunder/klienter. 
                        Dette er også en fin måte å markedsføre sin foretnings identitet for å øke kundegruppen og veksten 
                        i selskapet. </p>
                    <br/>
                    <br/>
                    <br/>
                    <p style={{textDecoration: "underline",}}>Pris 2099 - 5099 kr</p>
                   <br/>
                </div>
                   <div className="service-text">
                    <h4>Egen utviklet nettside</h4>
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
                   <br/>
                </div>
            </div>
        </>
    )
}

export default Service; 