import axios from "../../../utils/axios.js";


export const getTransactions = async () => {
  const res = await axios.get('/transactions');
  return res.data;
};


export const addTransaction = async (data) => {
  const res = await axios.post('/transactions', data); //data is PostBody
  return res.data;
}


export const editTransaction = async (id,data) => {
  const res = await axios.put(`/transactions/${id}`, data); //data is PostBody
  return res.data;
}


export const deleteTransaction = async (id) => {
  const res = await axios.delete(`/transactions/${id}`);
  return res.data;
}