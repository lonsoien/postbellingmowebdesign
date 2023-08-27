
import ui from "../images/UI - colordesign.jpeg";

function ProductCard() {
  return (
    <>
      <div className="container-product">
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/blogs" className="view">BLOGG</a>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/portfolio">PORTFOLIO</a>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/business">BUSINESS</a>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/websites">NY SIDE</a>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default ProductCard;