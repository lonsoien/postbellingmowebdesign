
import black from "../images/blvck home portfolio.png";
import next from "../images/icon.png"; 
import back from "../images/icon-back.png";

export default function Portfolio() {
    return (
        <>
        <h1>Get your Blog</h1>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                <img className="portfolio-img" alt="black and white portfolio" src={black}></img>
                <div className="portfolio-text">
                <h4>Et blogg design navn</h4>
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
                <p>Pris: 1499,- </p>
                <h3>Live Demo:</h3>
                <br/>
                <div className="livelink">
                <img src={next} alt="arrow" style={{width: "32px", margin: "6px"}}></img> 
                    <a href="/blogs">Layout-blog.webdesign
                    </a>
                </div>
             </div>
             </div>
             <br/>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                <img className="portfolio-img" alt="blog example version 1" src={black}></img>               
                <div className="portfolio-text-white">
                <h4>Blog Layout Name</h4>
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
                <p>Pris: 1499,- </p>
                <h3>Live Demo:</h3>
                <br/>
                <div className="livelink">
                <img src={next} alt="arrow" style={{width: "32px", margin: "6px"}}></img> 
                    <a href="/blogs">Layout-blog.webdesign
                    </a>
                </div>
             </div>
             </div>
            <br/>
            <br/>
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