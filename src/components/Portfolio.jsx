import next from "../images/icon.png"; 
import back from "../images/icon-back.png"; 
import home from "../images/Portfolio home.png";
import illustrate from "../images/template.jpg";


export default function Portfolio() {
    return (
        <>
        <h1>Buy available webdesigns</h1>
            <div className='borderline'></div>
            <br />
            <br/>
            <div className="layout-box">
            <img className="website-img" alt="black and white portfolio" src={illustrate}></img>
                <div className="portfolio-text">
                <br/>
                <h4>Webdesigns like unique Blogs, Portfolio´s or Business-webpage solutions will be put here for 
                    immediate sale!</h4>
                <br/>
                <p>These are finshed designs with implemented functionalities ready to be deployed online. </p>
                <br/>
                <p>After purchase the site will be set up with a hosting and a domain by your choosing. 
                    Images and content on the layout´s is just a demo for display and not for sale. 
                    After a request, this will be added to the design to fit your needs.
                </p>
                <br/>
                <p>A live link will be available for each protype that are available to purchase.</p>
                <br/>
                <p>If no available design is listed here or want a different webdesign, 
                please send a request: <h3>postbellingmo@gmail.com</h3></p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className='borderline'></div>
                <br/>
             </div>
             </div>
            <br/>
            <div className="layout-box">
                <div className="portfolio-text-white">
                <br/>
                <h4>Black and White Gallery portfolio is under construction and are soon available for
                    purchase.
                </h4>
                <br/>
                <p>This webdesign is a gallery with focus on display images. Further description will be povided
                    when the construction is finished. 
                </p>
                <br/>
                <p>Reminder that the images and content is a demo for display and not for sale.
                </p>
                <br/>
                <br/>
                <br/>
                <p>Price: 1999,- </p>
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