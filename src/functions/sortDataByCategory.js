const sortByCategory =  (originalData,matchData) => {
    const data = matchData.reduce((data,element) => {
       const data1 = originalData.filter(elem => element === elem.category)
       data.push(data1)
       return data;
    },[])
    return data
}

export default sortByCategory;