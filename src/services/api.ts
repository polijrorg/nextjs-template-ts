import axios from 'axios';

const api = axios.create({ baseURL: 'https://lide.polijrinternal.com' });

export default api;
