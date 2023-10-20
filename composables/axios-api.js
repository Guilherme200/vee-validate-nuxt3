import axios from 'axios';

export const useAxiosApi = (baseUrl) => {
  const instance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  })

  instance.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    let response = {};
    const status = error.response.status

    if (status === 422) {
      const errors = error.response.data.errors
      for (const [field, message] of Object.entries(errors)) {
        response[field] = message[0]
      }
    }

    return Promise.reject(response);
  });

  return instance
}