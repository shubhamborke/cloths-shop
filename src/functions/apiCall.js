import axios from "axios";
const api = "https://fakestoreapi.com/products";

const apiCall = async () => {
  const data = await axios.get(api);
  return data;
};

export default apiCall;