import React, { Component } from 'react';
import  {getProducts, deleteProduct} from './../service/products';
import ProductsTable from './ProductsTable';
import {Link} from "react-router-dom";
import _ from "lodash"



class Products extends Component {
    state = { 
        products: []
     }

     async componentDidMount() {
       
     const {data} =  await getProducts();

    this.setState({ products: data})

    console.log(data);
        
     }

     handleDelete = async (product) => {


        const originalProducts = this.state.products;

       const products = originalProducts.filter(m => m._id !== product)
       this.setState({products}) 

       try{
        await deleteProduct(product)
       }
       catch(ex){
           this.setState({products: originalProducts})
           alert("Could not delete product")      
      

       }
        
     }

    

    //  handleSearch = query => {
    //     this.setState({searchQuery: query, dropselected: null,
    //     dropselecteds: null,
    //     dropselectedss: null, 
    //     currentPage: 1})
    // }

    render() { 

       const {products} = this.state;

        // if (this.state.searchQuery)
        //     products = this.state.products.filter(m => 
        //         m.productName.toLowerCase().startsWith(this.state.searchQuery.toLowerCase())
        //         );

        return (
            <div className="row">
                <div className="col">

                    <div>
                    <Link to="/products/new"
                      className="btn btn-primary"
                      style={{marginBottom: 20}}>

                    New Product
                </Link>

                    </div>

               

                <p>Showing {products.length} products from the database.</p> 
                {/* <SearchBox value={this.state.searchQuery} onChange={this.handleSearch} ></SearchBox>
          */}
                <ProductsTable products={products} onDelete={this.handleDelete}></ProductsTable>
                </div>
            </div>
            
            
         );
    }
}
 
export default Products;