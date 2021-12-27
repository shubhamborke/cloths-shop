import React, { useState, useEffect } from "react";
import sortByCategory from "../functions/sortDataByCategory";
import Cards from "./cards";

const Category = (props) => {
  const [state, setstate] = useState([]);
  const [store, setstore] = useState([]);

  useEffect(async () => {
    const data = await props.store;
    setstate(data);
    const sortedData = sortByCategory(props.state, state);
    setstore(sortedData)
  },[props.state]);
  console.log(store);
  return (
    <div>
      {state && state.map((element,index) => {
        return (
          <div className="container">
            <h1 className="elementHead">{element}</h1>
            <div className="box">
              {store.length > 0 && store[index].map((elem,indx) => <Cards key={indx} elem={elem}/>)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
