// import events from "../images/black events portfolio.png";
import next from "../images/icon.png"; 
import back from "../images/icon-back.png"; 
import home from "../images/portfolio rounded.png";
// import gallery from "../images/gallery rounded.png";


export default function Portfolio() {
    return (
        <>
        <h1>Get your Portfolio</h1>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                <div className="portfolio-text">
                <h4>Black and White Gallery</h4>
                <br/>
                <p>Black and White Gallery website is under construction and are soon available for
                    purchase.
                </p>
                <br/>
                <p>Portfolio webdesigns will be put here for immediate sale!</p>
                <br/>
                <p>These are finshed designs ready to be deployed online as soon 
                    they are set up with a hosting and a domain.
                </p>
                <br/>
                <p>A live link will be available for each protype that are available to purchase.</p>
                <br/>
                <p>If no available design is listed here send a request to postbellingmo@gmail.com to create 
                    your own website now.
                </p>
                <br/>
                <br/>
                <p>Pris: 0,- </p>
                <h3>Live Demo:</h3>
                <br/>
                <div className="livelink">
                <img src={next} alt="arrow" style={{width: "32px", margin: "6px"}}></img> 
                    <a href="/portfolio">Soon-available.webdesign
                    </a>
                </div>
             </div>
             <img className="portfolio-img" alt="black and white portfolio" src={home}></img>
             </div>
            <br/>
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