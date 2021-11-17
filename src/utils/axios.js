import axios from 'axios';

// Create instance
let instance = axios.create();

// Set the AUTH token for any request
instance.interceptors.request.use((config) => {
	const token = localStorage.getItem('jwt');
	config.headers.Authorization = token ? `Bearer ${token}` : '';
	config.baseURL = 'https://dry-temple-29493.herokuapp.com';
	return config;
});

export default instance;
