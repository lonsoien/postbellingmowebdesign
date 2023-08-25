import React from "react";
import prototype from "../images/protype_img.jpg"
import services from "../images/planning.jpg"; 
import pc from "../images/pctable.jpg"; 

function Cards() {
    return (
        <>
            <div className="container-animation">
                <div className="card-animation">
                    <img src={prototype} 
                    style={{width: "100%", height: "100%", opacity: "0.8", position: "absolute"}} 
                    alt="digital">
                    </img>
                    <div className="content-animation">
                        <h2>PRODUCTS</h2>
                        <h3>WEBSITE FOR SALE</h3>
                        <div className="select-button">
                            <a href="/digitalproducts">SELECT</a>
                        </div>
                    </div>
                </div>
                <div className="card-animation">
                <img src={services} 
                    style={{width: "100%", height: "100%", opacity: "0.8", position: "absolute"}} 
                    alt="digital">
                    </img>
                    <div className="content-animation">
                        <h2>SERVICES</h2>
                        <h3>WEBSITE SERVICES</h3>
                        <div className="select-button">
                            <a href="/digitalproducts">SELECT</a>
                        </div>
                    </div>
                </div>
                <div className="card-animation">
                <img src={pc} 
                    style={{width: "100%", height: "100%", opacity: "0.8", position: "absolute"}} 
                    alt="digital">
                    </img>
                    <div className="content-animation">
                        <h2>PROJECTS</h2>
                        <h3>ABOUT & PROJECTS</h3>
                        <div className="select-button">
                            <a href="/about">SELECT</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards;