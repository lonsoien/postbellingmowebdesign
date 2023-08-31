
import bloglayout from "../images/blog-layout.png";
import bloglayout2 from "../images/blog-layout2.png";
import blvck from "../images/blvck home portfolio.png";

export default function Blogs() {
    return (
        <>
        <h1>BLOGG</h1>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                <div>
                    <img className="blog-img" alt="blog example version 1" src={blvck}></img>
                    </div>
                    <div>
                    <img className="blog-img" alt="blog example version 2" src={bloglayout}></img>
                    </div>
                    <div>
                    <img className="blog-img" alt="blog example version 3" src={bloglayout2}></img>
                    </div>
                </div>
                <div className="layout-text">
                <div className="blog-text">
                    <h4>Blog Layout Example</h4>
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
                    <h4>Blog Layout Example</h4>
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
                    <img className="blog-img" alt="blog example version 1" src={bloglayout}></img>
                    </div>
                    <div>
                    <img className="blog-img" alt="blog example version 2" src={bloglayout}></img>
                    </div>
                    <div>
                    <img className="blog-img" alt="blog example version 3" src={bloglayout2}></img>
                    </div>
                </div>
                <div className="layout-text">
                <div className="blog-text">
                    <h4>Blog Layout Example</h4>
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
                    <h4>Blog Layout Example</h4>
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