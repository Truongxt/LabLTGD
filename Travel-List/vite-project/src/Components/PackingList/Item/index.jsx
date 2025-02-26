function Item({ item, onRemoveItems, onToggleItems }) {
    return <>
      <li>
        <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {" "}
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onRemoveItems(item)}>❌</button>
  
      </li>
    </>
  }
 
export default Item;  