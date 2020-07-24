import axios from 'axios';

// axios.defaults.baseURL = 'http://home.fengziqiao.xyz:8802/auth';
axios.defaults.baseURL = '/api';
axios.defaults.headers.common.Authorization = 'AUTH_TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use((config) => config, (error) => Promise.reject(error));
axios.interceptors.response.use((response) => response.data, (error) => Promise.reject(error));

export default axios;
