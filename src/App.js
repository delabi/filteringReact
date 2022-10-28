import React, { useState } from "react";
import "./styles.css";
import Events from "./events.json";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");
  const keys = ["name", "city", "minPrice"];

  const search = (data) => {
    if (data == "minPrice") {
      console.log("Hallo there");
    } else {
      return data.filter((item) =>
        keys.some((key) => item[key].toString().toLowerCase().includes(query))
      );
    }
  };

  setProductsInfo([...lowestPriceGoods]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value.toLowerCase())}
      />
      <button className="search" onClick={(e) => setQuery("minPrice")}>
        Min
      </button>
      {/* <ul className="list">
      {Events.filter(event=>event.city.toLowerCase().includes(query)).map((event) => (
          <li key={event.id} className="listItem">{event.id}-{event.name}-{event.city}-{event.minPrice}</li>
      ))}
    </ul> */}
      <Table data={search(Events)} />
    </div>
  );
}

export default App;
