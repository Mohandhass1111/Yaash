import React, { useEffect, useState } from "react";

function ListItems({ getitems }) {
  const [items, setitems] = useState([]);
  useEffect(() => {
    setitems(getitems());
    console.log("updating items");
  }, [getitems]);
  return items.map((item) => <div key={items}>{item}</div>);
}

export default ListItems;
