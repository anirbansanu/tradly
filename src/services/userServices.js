import http from "./httpService";

const reg = (data)=>{
    const body={
        email:data.email,
        password:data.password
    }
  return http.post('http://localhost:8070/user',body);
}
function login(data){
  const d={
    email:data.email,
    password:data.password
  }
  return http.post('http://localhost:8070/user/auth',d);
}
function products(){
  return http.get('http://localhost:8070/product/all');
}
function product(id){
  return http.get(`http://localhost:8070/product/${id}`);
}
const cats=()=>{
  return http.get('http://localhost:8070/cat/all');
}
const cat=(id)=>{
  return http.get(`http://localhost:8070/cat/${id}`);
}
const postAdd = (data)=>{
  const body={
    name:data.name,
    brand_name:data.brand_name,
    description:data.description,
    file:data.file,
    price:data.price,
    purchasing_date:data.purchasing_date,
    date:data.date,
    seller_id: data.seller_id,
    category_id: data.category_id
  }
return http.post('http://localhost:8070/user',body);
}

const user = {
  reg,
  login,
  cat,
  cats,
  postAdd,
  products,
  product
}
export default user;