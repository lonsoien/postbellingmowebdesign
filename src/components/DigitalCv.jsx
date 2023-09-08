import bloglayout from "../images/blog-layout.png";
import bloglayout2 from "../images/blog-layout2.png";

export default function DigitalCv() {
    return (
        <>
        <h1 style={{ color: "white" }}>DIGITAL CV</h1>
            <div className='borderline'></div>
            <br />
            <br />
            <div className="layout-text">
                <div className="website-text">
                    <h4>Ny Nettside</h4>
                    <br/>
                    <p>
                        Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                    </p>
                </div>
                <div className="website-text">
                    <h4>Ting å tenkte på</h4>
                    <br/>
                    <p>
                        Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                    </p>
                </div>
                <div className="website-text">
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
            <div className="layout-box">
                <div>
                    <img className="website-img" alt="blog example version 1" src={bloglayout2}></img>
                    </div>
                    <div>
                    <img className="website-img" alt="blog example version 2" src={bloglayout}></img>
                    </div>
                    <div>
                    <img className="website-img" alt="blog example version 3" src={bloglayout2}></img>
                    </div>
                </div>
            <br />
            <br/>
        </>
    )
}