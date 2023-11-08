import axios from "axios";

axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  const url = {
    baseUrl: process.env.REACT_APP_BASE_URL,
    users: "/users"
  }

  const instance = axios.create({
    baseURL : url.baseUrl,
    headers: {
        "Content-Type":"application/json",
        Accept:"application/json"
    }
})

const api = {
    url,
    instance,
    get:instance.get,
    put:instance.put,
    delete:instance.delete,
    post:instance.post
}

export default api;