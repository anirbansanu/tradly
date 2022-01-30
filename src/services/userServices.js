import http from "./httpService";

const reg = (data)=>{
    const d={
        email:data.email,
        password:data.password
    }
  return http.post('http://localhost:8070/user',d);
}

function products(){
  return http.get('http://localhost:8070/product/all');
}
function product(id){
  return http.get(`http://localhost:8070/product/${id}`,);
}

const user = {
  reg,
  products,
  product
}
export default user;