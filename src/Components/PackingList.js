import { useState } from "react";
import Item from "./Item";
import { useDispatch } from "react-redux";
import { clearList } from "../features/travelSlice";

export default function PackingList({ items }) {
  // const items = useSelector((store) => store.travelList);
  const [sortBy, setSortBy] = useState("input");
  const dispatch = useDispatch();
  let sortedItems;
  function handleClearList() {
    dispatch(clearList());
  }
  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description") {
    sortedItems = items.slice().sort((a, b) => a.title.localeCompare(b.title));
    console.log(sortedItems);
  }

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item item={item} />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClearList}>Clear list</button>
      </div>
    </div>
  );
}
