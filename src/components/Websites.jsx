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
                    <h4>New Website - process</h4>
                    <br/>
                    <p>In need for a new website in mind? Lets create together! </p>
                    <p>
                    <br/>
                    The designer process starts when we have an agreement.
                    Designer-process is important of creating the design layout before the development and to create the visual message you want to 
                    express to your visitors. 
                    <br/>
                    You will be a part of the process and give feedback along the way. When the prototype is ready the coding starts. 
                    The whole project may vary on how big the project is.
                    I use Adobe XD as a tool and will share links so you can follow the progress. 
                    </p>
                </div>
                <div className="portfolio-text">
                    <h4>Things to think about</h4>
                    <br/>
                    <p>
                        <li>Brand Identity</li>
                        <li>Functionality</li>
                        <li>Budget</li>
                        <li>Material, content</li>
                        <li>Images</li>
                        <li>Competitors</li>
                        <li>Target Market</li>
                    </p>
                </div>
                <div className="portfolio-text">
                    <h4>Deployment</h4>
                    <br/>
                    <p>
                       When the website is ready, and you are happy with the results its time to deploy your website.
                       Domain and hosting is a seperate service that needs to be paid monthly to the provider.
                       I use Netlify as domain provider. The price may vary depends on what adress you want and what is available. 
                       <br/>
                       A montly subscription to a hosting service is what you pay to own the rights to your domain.
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