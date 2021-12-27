const dataSort = (data) => {
//   console.log(data);
  const headList = data.reduce((headList, element) => {
    if(!headList.includes(element.category)){
        headList.push(element.category)
    }
    return headList;
  }, []);
  return headList;
};

export default dataSort;
