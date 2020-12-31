import http from "./httpService"

export function getProducts() {
    return http.get("http://localhost:3000/apis/product/getallproducts");
}

export function getProduct(id) {
    return http.get(`http://localhost:3000/apis/product/getproduct/${id}`);
}

export function saveProduct(product) {
    if(product._id)
    {
        const body = {...product};
        delete body._id;
       return http.put(`http://localhost:3000/apis/product/updateproduct/${product._id}`, body);
            
    }
     return http.post("http://localhost:3000/apis/product/addnewproduct", product)
    
}


export function deleteProduct(id) {
    return http.delete(`http://localhost:3000/apis/product/deleteproduct/${id}`);
}