import React from "react";
import facebook from "../images/icons8-facebook-200.png";
import linkedin from "../images/icon-linkedin-200.png";
import instagram from "../images/icon-instagram-old-200.png";

function Footer() {
    return (
        <>
            <hr />
            <footer>
                <div>
                    <div className="links">
                        <a href="/digitalproducts">DESIGNS</a>
                        <a href="/">HOME</a>
                        <a href="/digitalproducts">SERVICES</a>
                    </div>
                    <div className="adress">
                        <p>BELLINGMO WEBDESIGN</p>
                        <p>postbellingmo@gmail.com</p>
                    </div>
                    <div className="icon-box">
                    <a href="https://facebook.com">
                        <i><img src={facebook} alt="" style={{width: "60px", padding: "10px"}}></img></i>
                        </a>
                        <a href="https://www.instagram.com/bellingmowebdesign/">
                         <i><img src={instagram} alt="" style={{width: "60px", padding: "10px"}}></img></i>
                        </a>
                        <a href="https://www.linkedin.com/in/louise-bellingmo-onsøien-99538923a/">
                            <i><img src={linkedin} alt="" style={{width: "60px", padding: "10px"}}></img></i>
                        </a>
                        <p style={{ textAlign: "center", color: "#e3e8e9", fontSize: "12px", margin: "10px" }}>
                    orgnr: 999 999 999</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer; 