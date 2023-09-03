import ui from "../images/UI - colordesign.jpeg";
// import blvck from "../images/Iphone.png";
import iphone from "../images/iphone gallery.png";

function ProductCard() {
  return (
    <>
      <div className="container-product">
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
          <a href="/websites">NEW SITE</a>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={iphone} className="web-image"></img>
          <div className="view-button">
            <a href="/portfolio">PORTFOLIO</a>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/blogs" className="view">BLOG</a>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
          <a href="/business">BUSINESS</a>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default ProductCard;