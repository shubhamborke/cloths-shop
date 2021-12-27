import React, { useState, useEffect } from "react";
import apiCall from "../functions/apiCall";
import dataSort from "../functions/dataSort";
import Category from "./category";

const FetchData = (props) => {
  const [state, setstate] = useState([]);

  useEffect(async () => {
    const apiData = await apiCall();
    setstate(apiData.data);
  }, []);
  return (
    <div>
        {<Category store={dataSort(state)} dataTraverse={props.dataTraverse} state={state}/>}
    </div>
  );
};

export default FetchData;