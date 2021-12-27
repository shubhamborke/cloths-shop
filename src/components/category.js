import React, { useState, useEffect } from "react";
import sortByCategory from "../functions/sortDataByCategory";
import Cards from "./cards";

const Category = (props) => {
  const [state, setstate] = useState([]);
  const [store, setstore] = useState([]);

  useEffect( () => {
    const data = props.store;
    setstate(data);
    const sortedData = sortByCategory(props.state, state);
    setstore(sortedData)
  },[store]);
  return (
    <div>
      {state && state.map((element,index) => {
        return (
          <div key={index} className="container">
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
