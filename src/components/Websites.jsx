// import DigitalCv from "./DigitalCv";
import back from "../images/icon-back.png";

export default function Websites() {
    return (
        <>
        <h1>Create new website</h1>
            <div className='borderline'></div>
            <br />
            <br/>
                <div className="layout-text">
                <div className="portfolio-text">
                    <h4>New Website - Designerprocess</h4>
                    <br/>
                    <p>
                        Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                    </p>
                </div>
                <div className="portfolio-text">
                    <h4>Things to think about</h4>
                    <br/>
                    <p>
                        Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                    </p>
                </div>
                <div className="portfolio-text">
                    <h4>Prosessen</h4>
                    <br/>
                    <p>
                        Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                    </p>
                </div>
            </div>
            <br />
            <br />
            <div className="container-animation">
            <div className="select-button">
                    <a href="/digitalproducts">BACK
                    <img src={back} alt="arrow" style={{width: "32px", margin: "2px"}}></img>
                    </a>
                </div>
            </div>
            <br/>
            <br />
        </>
    )
}