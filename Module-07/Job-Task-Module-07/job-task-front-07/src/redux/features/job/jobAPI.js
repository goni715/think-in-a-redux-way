import axios from "../../../utils/axios.js";

export const getJobs = async () => {
  const res = await axios.get('/jobs');
  return res.data;
}

export const getJob = async (id) => {
  const res = await axios.get(`/jobs/${id}`);
  return res.data;
}


export const addJob = async (data) => {
  const res = await axios.post('/jobs', data); //data is PostBody
  return res.data;
}


export const editJob = async (id,data) => {
  const res = await axios.put(`/jobs/${id}`, data); //data is PostBody
  return res.data;
}


export const deleteJob = async (id) => {
  const res = await axios.delete(`/jobs/${id}`);
  return res.data;
}