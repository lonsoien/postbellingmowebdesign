
import ui from "../images/UI - colordesign.jpeg";

function ProductCard() {
  return (
    <>
      <div className="container-animation">
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="https://huldrablog.netlify.app">VIEW</a>
            <p>Blogg</p>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/digitalproducts">VIEW</a>
            <p>Portfolio</p>
          </div>
        </div>
      </div>
      <div className="container-animation">
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/digitalproducts">VIEW</a>
            <p>Business</p>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={ui} className="web-image"></img>
          <div className="view-button">
            <a href="/digitalproducts">VIEW</a>
            <p>X Nettside</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
}

export default ProductCard;