import axios, { type AxiosResponse } from 'axios';

class ApiError extends Error {
  response: AxiosResponse;

  constructor(message: string, response: AxiosResponse) {
    super(message);
    this.name = 'ApiError';
    this.response = response;
  }
}

// 1. .env에서 설정값들을 가져옵니다.
const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080';
const TOKEN_KEY = import.meta.env.VITE_TOKEN_KEY || 'jwtToken'; // .env에 없으면 기본값 사용
const DEV_TOKEN = import.meta.env.VITE_DEV_TOKEN; // 개발용 고정 토큰

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 2. 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    // 로컬 스토리지에서 토큰을 가져오되, 없을 경우 .env의 개발용 토큰을 차선책으로 사용합니다.
    const token = localStorage.getItem(TOKEN_KEY) || DEV_TOKEN;
    
    if (token) {
      config.headers['Authorization'] = token.startsWith('Bearer ') ? token : `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 3. 응답 인터셉터 (에러 처리 로직 포함)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isAxiosError(error) && error.response) {
      const customMessage = error.response?.data?.message;

      if (customMessage) {
        const customError = new ApiError(customMessage, error.response);
        return Promise.reject(customError);
      }

      // 401 에러 발생 시 (토큰 만료 등) 토큰 삭제 및 로그인 이동
      if (error.response?.status === 401) {
        localStorage.removeItem(TOKEN_KEY);
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;