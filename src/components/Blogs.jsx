import home from "../images/portfolio rounded.png";
import next from "../images/icon.png"; 
import back from "../images/icon-back.png";

export default function Blogs() {
    return (
        <>
        <h1>Get your Blog</h1>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
                <div className="portfolio-text">
                <h4>Blog for sale</h4>
                <br/>
                <p>Blog designs will be put here for immediate sale!</p>
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
                <p>Price: 0,- </p>
                <h3>Live Demo:</h3>
                <br/>
                <div className="livelink">
                <img src={next} alt="arrow" style={{width: "32px", margin: "6px"}}></img> 
                    <a href="/portfolio">Not-available.webdesign
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