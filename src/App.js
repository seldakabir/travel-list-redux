import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

function App() {
  const items = useSelector((store) => store.travelList);
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList items={items} />
      <Stats />
    </div>
  );
}

export default App;
