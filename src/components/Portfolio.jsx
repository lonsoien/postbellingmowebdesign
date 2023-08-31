import layout1 from "../images/webside-business layout.png";
import layout2 from "../images/webside-business layout.png";
import blvck from "../images/blvck home portfolio.png";

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
             </div>
             </div>

                <div className="layout-text">
                <div className="blog-text">
                    <h4>Portfolio Layout Name</h4>
                    <br/>
                    <p>
                        Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                    </p>
                </div>
                <div className="blog-text">
                    <h4>Portfolio Example</h4>
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
            <br/>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                <div>
                    <img className="blog-img" alt="blog example version 1" src={layout2}></img>
                    </div>
                    <div>
                    <img className="blog-img" alt="blog example version 2" src={layout2}></img>
                    </div>
                    <div>
                    <img className="blog-img" alt="blog example version 3" src={layout1}></img>
                    </div>
                </div>
                <div className="layout-text">
                <div className="blog-text">
                    <h4>Layout Example</h4>
                    <br/>
                    <p>
                        Blog og Portfolio nettsidene er kodet og integrert backend med Sanity.ios, som er som et headless CMS.
                        Med en blog eller en portfolio løsning kan man da "poste" egne innlegg på siden som f.eks artikler i en blog,
                        og bilder i en portfolio. Her kan man selv kontrollere innholdet, ved å legge til eller fjerne innlegg/post. 
                        Det fine med headless CMS er at om du ønsker å fornye nettsiden, har man lagret all content på en server i dette 
                        tilfelle Sanity.ios, uten å måtte slette hele nettsiden for å fornye utseende. 
                    </p>
                </div>
                <div className="blog-text">
                    <h4>Layout Example</h4>
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
            <br/>
            <div className="container-animation">
                <div className="select-button">
                    <a href="/digitalproducts">Back DESIGNS</a>
                </div>
            </div>
            <br/>
            <br />
        </>
    )
}