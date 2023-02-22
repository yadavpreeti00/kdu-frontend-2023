import "./item.scss";

function Item({ imageSource, season, price }) {
  return (
    <div className="item-container">
      <div className="item-img">
        <img className="image" src={imageSource} alt="jacket" />
      </div>
      <div className="item-season">{season + " jacket"}</div>
      <div className="item-price">{"$" + price}</div>
    </div>
  );
}
export default Item;
