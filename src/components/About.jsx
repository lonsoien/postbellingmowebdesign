import React from "react";
import program from "../images/program.jpg";
import huldra from "../images/prosjekthuldrablog_mockup.png";
import house from "../images/houseofcode-mockup.png";
import kicks from "../images/kickscrew-mockup.png";

function About() {
    return (
        <>
            <h1>ABOUT</h1>
            <div className="borderline"></div>
            <br />
            <div className="service">
            <div className="container-about">
        <div className="card-about">
          <img alt="about bellingmowebdesign" src={program} className="about-image"></img>
          </div>
                <div className="about-text">
                    <h4>Welcome to Bellingmo Webdesign</h4>
                    <br/>
                    <p>My name is Louise Bellingmo and I am a freelance Frontend Developer living in Oslo, Norway.</p>
                    <p>I work with different web-projects and development, mainly webdesigns.
                        If you are looking for a new funcky and functional website for your small business you have come to the right place!
                    </p>
                    <p>I also develop blog solutions and portfolios if you want to share and express yourself online.</p>
                    <p>
                        I create prototype websites for direct sales, as shown on the digital product site.
                         Here you can choose your type of website that suits you! The prototypes are already coded and stored in a Github repository.
                         You can easily send me request for personal changes to the design or functionality to fit your needs for your special website.  
                    </p>
                    <br/>
                    <p>
                    I use framework and libary like React with Sanity.ios, Framer motion and SASS for styling (SCSS). All code are kept in a
                    Github repo, that you will get access to. 
                    </p>
                </div>
            </div>
            </div>
            <br />
            <h1 style={{ color: "white"}}>PROJECTS</h1>
            <div className='borderline'></div>
            <div className="service">
                <div className="service-text">
                    <h4>Huldrablog</h4>
                    <p>Blog about lifestyle and nature photos.</p>
                    <img alt="about bellingmowebdesign" src={huldra} className="about-image"></img>
                    </div>
                <div className="service-text">
                    <h4>House of Code</h4>
                    <p>Frontend and Digital Design Agency.</p>
                   
                    <img alt="about bellingmowebdesign" src={house} className="about-image"></img>
                </div>
                <div className="service-text">
                    <h4>Kicks Crew</h4>
                    <p>E-commerce sneakers webshop.</p>
                    <img alt="about bellingmowebdesign" src={kicks} className="about-image"></img>
                </div>
            </div>
            <div className="container-animation">
                <div className="select-button">
                    <a href="https://louisebellingmo-portfolio.netlify.app/">PORTFOLIO</a>
                </div>
            </div>
            <br/>
            <br />
        </>
    );
}

export default About;