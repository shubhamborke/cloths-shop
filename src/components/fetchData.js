import React, { useState, useEffect } from "react";
import apiCall from "../functions/apiCall";
import dataSort from "../functions/dataSort";
import Category from "./category";

const FetchData = () => {
  const [state, setstate] = useState([]);

  useEffect(async () => {
    const apiData = await apiCall();
    setstate(apiData.data);
  }, []);
  
//   console.log(store);
  return (
    <div>
        {<Category store={dataSort(state)} state={state}/>}
      {/* {state && state.map(elements => <Cards key={elements.id} elements={elements}/>)} */}
    </div>
  );
};

export default FetchData;