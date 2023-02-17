import "./Item.scss";

function Item(props) {
  return (
    <div className="item">
      <div className="item-name">{props.item}</div>
      <button type="button" className="remove-btn">
        x
      </button>
    </div>
  );
}

export default Item;
