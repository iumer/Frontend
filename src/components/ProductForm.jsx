import React from 'react';
import Joi from "joi-browser"
import Form from './form';
import { getProduct, saveProduct } from '../service/products';
import _ from "lodash"

class ProductForm extends Form {

    state = {
        productId: "",
        data: {
            productName: "",
            companyName: "",
            price:"",
            type: "",
            description: ""
        },
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        productName: Joi.string().required().label("Product Name"),
        companyName: Joi.string().required().label("Company Name"),
        price: Joi.number().required().label("Price"),
        type: Joi.string(), 
        description: Joi.string()
    }


   async componentDidMount() {

       
       const productId = this.props.match.params.id;
       if (productId === "new") return;

       try{
        const {data: product} = await getProduct(productId);
        this.setState({ data: this.mapToViewModel(product)});
 
       }
       catch(ex) {

        if (ex.response && ex.response.status === 404) 
        return this.props.history.replace("/notfound")


       }  
    }
   
    mapToViewModel(product) {

            return {

                _id: product._id,
                productName: product.productName,
                companyName: product.companyName,
                price: product.price,
                type: product.type,
                description: product.description

    }

    }


    doSubmit = () => {

        try{

            saveProduct(this.state.data)
            this.props.history.push("/products")

        }
        catch(ex)  {
          
            if (ex.response && ex.response.status === 400)
            alert("Could complete task.")

        }

  
    }


    render() { 

        return ( 
            <div style={{margin: "50px"}}>
                <h1>Add / Update a product</h1>

                <form onSubmit={this.handleSubmit}>
                        {this.renderInput("productName","Product Name")}
                        {this.renderInput("companyName","Comapany Name")}
                        {this.renderInput("price","Price")}
                        {this.renderInput("type","Type")}
                        <div style={{marginBottom: "10px", marginTop: "10px"}} class="input-group">
                          <div class="input-group-prepend">
                            <span class="input-group-text">Description</span>
                          </div>
                           <textarea value={this.state.data.description}  name="description" onChange={this.handleChange} class="form-control"></textarea>
                        </div>
                        {this.renderButton("Save")}
                </form>
            </div>
            
         );
    }
}
 
export default ProductForm ;