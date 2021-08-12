import axios from "axios";

// new axios instance to work with inside the action creators in order to handle newletter api:
// this is goign to be called with a list of all those different values that we entered into our form as an argument to our action creator (an asynch action creator necessite a reduxThunk)

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  validateStatus: false,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzIiwianRpIjoiMGEwMzg3ZTNiNDZjOTE1NTQyY2JjMmRhZTFkZTgyMDRjNTQ0MzUyMGZiMTczNGMxNmIwMjZhYWYzY2RiMzBiNTQ3ZWY4MzMyMTkyM2E5MzEiLCJpYXQiOjE2Mjg3NzI4MDYuMjE2NTQyLCJuYmYiOjE2Mjg3NzI4MDYuMjE2NTQ2LCJleHAiOjE2NjAzMDg4MDYuMTU0MTcxLCJzdWIiOiIyMSIsInNjb3BlcyI6W119.C05ChVmEf4ZW3g1gg0k8eJegM7WAwpEgFJso1oNlwyjftbnGHHQawhVi6_8zfshELT-irZz-H3SES4W1JdE8NT_fqGn7jiSWdozJ0OhAqSHEabysOqh4v3nCNTfpLqyql8kh4MY0zUifO5T2iwYpWLzLM_690mTceQOcSD5lThQlaGbx6ICAIxeoFE0GlB4_xYgN_fyfCSPD2nKyCGmjxI7DAYsA8f4Xa6xbFr6P6tlPSo3RpmKNKbzGghD75cQnw3Cy0fkawLUoiRvefRAkKTtkElN1HWKhW26jUSh9gLc-DmIW4_HE2BpEhyCNFSBle3T6UvEzCY-hVaDQF1tQ3_EEccsDouFDIAHCvp9O2oHfydTPSUZ6II4K1Ehq6cT2BMU1SXc-_y2URAJgTjO_1xCm_ZXWfhOEkqzdkz6-itGfh0kN7NklFa9-89IBZQDt_GTe6F_tMQaBYKkgjxlDJwC6_MvPidVYGKbNgrX4Xrr4gC59ParfZo3kpgST23ud0o8m5RUi4BA2ek-Z3Y6VzxfLHbmz9CD1otBNrBpnmR8C3sevpCucGNYzvvuwKIzE4mdeHEctLnI7Rf0gLSjK8tS-53lGrBw5leeEbIygIB3iEZ_9W_tt4OHPr3NRF_tdJeCqhnD20CLYwQaRDP_QIQHgZpua1O5DPqUqmWsujk8";
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosInstance;
