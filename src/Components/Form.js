import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../travelSlice";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  function handleAddItems(e) {
    e.preventDefault();
    if (!description) return;
    dispatch(addToList(description, quantity));
    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleAddItems}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
