import React, { createContext, useContext, useState } from "react";
const travelContext = createContext();

function TravelProvider({ children }) {
  const [items, setItems] = useState("");

  return (
    <travelContext.Provider
      value={{
        items,
        setItems,
      }}
    >
      {children}
    </travelContext.Provider>
  );
}

function UseTravel() {
  const travel = useContext(travelContext);
  return travel;
}
export { UseTravel, TravelProvider };
