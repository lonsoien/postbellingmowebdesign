
import blvck from "../images/Blvck Group portfolio - xs.jpg";
import black from "../images/blvck home portfolio.png";
import black2 from "../images/blvck site portfolio.png";
import icon from "../images/icon.png"; 

export default function Portfolio() {
    return (
        <>
        <h1>PORTFOLIO</h1>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                <img className="blog-img" alt="black and white portfolio" src={blvck}></img>
                <div className="portfolio-text">
                <h4>Portfolio Layout Name</h4>
                <br/>
                <p>
                Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                </p>
                <br/>
                <p>
                Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                </p>
                <br/>
                <h3>Live Link:</h3>
                <br/>
                <div className="livelink">
                    <a href="/#">Blackandwhite.portfolio.bellingmowebdesign
                        <img src={icon} alt="arrow" style={{width: "32px", margin: "2px"}}></img> 
                    </a>
                </div>
             </div>
             </div>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                    <img className="portfolio-img" alt="blog example version 1" src={black}></img>
                    <img className="portfolio-img" alt="blog example version 3" src={black2}></img>
               
                <div className="portfolio-text">
                <h4>Portfolio Layout Name</h4>
                <br/>
                <p>
                Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                </p>
                <br/>
                <p>
                Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                </p>
                <br/>
                <h3>Live Link:</h3>
                <br/>
                <div className="links">
                <a href="/#">Blackandwhite.portfolio.bellingmowebdesign</a>
                </div>
             </div>
             </div>
            <br/>
            <br/>
            <div className="container-animation">
                <div className="select-button">
                    <a href="/digitalproducts">Designs Services</a>
                </div>
            </div>
            <br/>
            <br />
        </>
    )
}