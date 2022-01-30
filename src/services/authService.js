import http from "./httpService";

export function auth(data) {
    const authData={
        email:data.username,
        password:data.password
    }
  return http.post('http://localhost:5000/auth',authData);
}