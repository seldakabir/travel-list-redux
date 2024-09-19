import { useDispatch } from "react-redux";
import { removeFromList, toggleUpdate } from "../travelSlice";

export default function Item({ item }) {
  console.log(item);
  const dispatch = useDispatch();
  function handleDeleteItem() {
    dispatch(removeFromList(item.id));
  }
  function handleToggleItem() {
    dispatch(toggleUpdate(item.id));
  }

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => handleToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.title}
      </span>
      <button onClick={() => handleDeleteItem(item.id)}>❌</button>
    </li>
  );
}
