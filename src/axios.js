import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:8081', // 기본 URL을 설정하세요
  timeout: 1000,
  headers: { 'X-Custom-Header': 'foobar' }
});

export default instance;