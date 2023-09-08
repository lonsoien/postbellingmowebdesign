import top from "../images/top64.png"; 


function Service() {
    return (
        <> 
            <h1 style={{ color: "white" }}>SERVICES</h1>
            <div className='borderline'></div>
            <div className="service">
                <div className="service-text">
                    <h4>Buy a website</h4>
                    <br/>
                    <p>
                    When buying a new website, there are things multiple things to consider and it can be difficult and some times frustrating. 
                    What type of website do I need for my business, and how much money do I want to spend? 
                    Maybe you are a private buyer that want a more simpler solution to show and express yourself 
                    online? Maybe you have many followers on different SoMe channels, but also want to create a 
                    profile with a website solution?
                    </p>
                    <br/>
                    <p> There are many gode solutions that can do the job for you. 
                        Like setting up your own website with Wordpress, WIX or Webnode ect. 
                        That’s doesn’t necessary make you a digital designer, who knows the tricks of 
                        creating an attracting and visual impressive website. </p>
                        <br/>
                        <p>
                        Here on bellingmowedesign you will get a solid, modern website adapted to your 
                        needs for a good price without the hustle, nor have to spend a lot of money on the bigger agencies.
                        </p>
                    <br/>
                </div>
                <div className="service-text">
                    <h4>How to buy a website from bellingmowebdesign?</h4>
                    <br/>
                    <p>Send in a non-binding request to postbellingmo@gmail.com.</p>
                    <br/>
                    <p>
                    Write a little bit about yourself and/or your business. 
                    Explain what type of website you are looking for and what type of functionalities you wish to have on your site.
                    </p>
                <br/>
                <p>
                After the request and a deal is made on what type of website you want, we will then be 
                adding all the images, content and material for your website. 
                Your request will be answered within 1-3 working days. 
                </p>
                <br/>
                <p>Any qestions or other requires are all ofcourse welcomed!</p>
                </div>
                <div className="service-text">
                    <h4>Types of webdesign for sale:</h4>
                    <br/>
                    <li><p>New website (no genre)</p></li>
                    <li><p> Business </p></li>
                    <li><p> Portfolio </p></li>
                    <li><p> Blog </p></li>
                    <li><p>Digital Resume</p></li>
                    <br/>
                    <p>
                    All websites are responsive and developed to adapt all digital screens like computers (pc), tablets and mobile (android/apple). 
                    All webpages are coded with javascript library React and I use Sanity.ios as headless CMS (API). 
                    You will get your own url to your Studio Dashboard to post «add/delete» material into your website.
                    </p>
                    <br/>
                    <p>
                    All websites follows the guidelines for WCAG. 
                    The webdesigns contains metatags for search engines like Google.
                    </p>
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
                    <p style={{textDecoration: "underline",}}>Start Pris fra 1899,- kr</p>
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
                    <p style={{textDecoration: "underline",}}>Start Pris fra 3499,- kr</p>
                </div>
                   <div className="service-text">
                    <h4>Egen utviklet nettside</h4>
                    <br/>
                    <p>
                        Du kan også sende inn en forespørsel om få egen utviklet nettside etter ditt ønske.
                        Det vi gjør først er å planlegge og avtale aspekter som design, landingssider, div funksjonalitet,
                        innhold størrelse, fonts m.m. </p>
                        <br/>
                        <p>
                        Når vi er enige om identiteten og layouten starter selve designer prossesen. 
                        Dette kan ta alt fra 1-3 uker å utvikle prototypen, basert på størrelsen på prosjektet. 
                        Her vil man ha muligheter for å delta i designer fasen for å gi feedback. Når man er fornøyd 
                        med resultatet går man over til kodingen/utviklingen av selve nettsiden.
                        Dette tar også tid alt fra 1-3 uker. 
                    </p>
                    <br/>
                    <p style={{textDecoration: "underline",}}>Start Pris fra 3499,- kr</p>
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