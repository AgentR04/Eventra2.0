import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL
});

// Auth endpoints
export const register = (userData) => api.post('/auth/register', userData);
export const login = (credentials) => api.post('/auth/login', credentials);
export const logout = () => api.get('/auth/logout');
export const getCurrentUser = (email) => api.get(`/auth/me?email=${email}`);

// College endpoints
export const createCollege = (collegeData) => api.post('/college', collegeData);
export const getColleges = () => api.get('/college');
export const getCollegeByCode = (code) => api.get(`/college/${code}`);
export const createInvitation = (invitationData, email) => 
  api.post(`/college/invitation?email=${email}`, invitationData);
export const verifyInvitation = (code) => api.get(`/college/invitation/${code}`);

// User endpoints
export const getUsers = (email) => api.get(`/users?email=${email}`);
export const getUsersByCommittee = (committee, email) => 
  api.get(`/users/committee/${committee}?email=${email}`);
export const getUserById = (id, email) => api.get(`/users/${id}?email=${email}`);
export const updateUser = (id, userData, email) => 
  api.put(`/users/${id}?email=${email}`, userData);
export const deleteUser = (id, email) => api.delete(`/users/${id}?email=${email}`);

export default api;
