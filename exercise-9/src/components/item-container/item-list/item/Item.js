import "./Item.scss";

function Item(props) {
  return (
    <div className="item">
      <div className="item-name">{props.todo}</div>
      <button type="button" className="remove-btn" onClick={props.onDelete}>
        x
      </button>
    </div>
  );
}

export default Item;
