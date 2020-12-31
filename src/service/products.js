import http from "./httpService"

export function getProducts() {
    return http.get("https://projec-back.herokuapp.com/apis/product/getallproducts");
}

export function getProduct(id) {
    return http.get(`https://projec-back.herokuapp.com/apis/product/getproduct/${id}`);
}

export function saveProduct(product) {
    if(product._id)
    {
        const body = {...product};
        delete body._id;
       return http.put(`https://projec-back.herokuapp.com/apis/product/updateproduct/${product._id}`, body);
            
    }
     return http.post("https://projec-back.herokuapp.com/apis/product/addnewproduct", product)
    
}


export function deleteProduct(id) {
    return http.delete(`https://projec-back.herokuapp.com/apis/product/deleteproduct/${id}`);
}