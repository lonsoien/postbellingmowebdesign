import huldra from "../images/huldrblog-nett.png"; 
import icon from "../images/icon.png"; 

function ProductCard() {
  return (
    <>
      <div className="container-animation">
        <div className="card-product">
          <img alt="webdesign product" src={huldra} className="web-image"></img>
          <div className="view-button">
            <a href="https://huldrablog.netlify.app">VIEW</a>
            <p>Blog Layout</p>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={huldra} className="web-image"></img>
          <div className="view-button">
            <a href="/digitalproducts">VIEW</a>
            <p>Digital Portfolio</p>
          </div>
        </div>
      </div>
      <div className="container-animation">
        <div className="card-product">
          <img alt="webdesign product" src={huldra} className="web-image"></img>
          <div className="view-button">
            <a href="/digitalproducts">VIEW</a>
            <p>Business webpage</p>
          </div>
        </div>
        <div className="card-product">
          <img alt="webdesign product" src={huldra} className="web-image"></img>
          <div className="view-button">
            <a href="/digitalproducts">VIEW</a>
            <p>E-commerce webpage</p>
          </div>
        </div>
      </div>
      <br />
      <div className="container-animation">
                <div className="select-button">
                    <a href="/designs">All 
                    <i><img src={icon} alt="arrow" style={{width: "32px", margin: "2px"}}>
                      </img> </i> DESIGNS</a>
                </div>
            </div>
            <br />
    </>
  );
}

export default ProductCard;