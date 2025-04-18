import axios from 'axios';

const API = 'http://localhost:5173/api';

export const login = (data) => axios.post(`${API}/login`, data);
export const scheduleInterview = (data) => axios.post(`${API}/schedule`, data);
export const getAllInterviews = () => axios.get(`${API}/interviews`);
