import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductTable extends Component {

    render() { 
      
            const {products, onDelete} =  this.props

    return ( 
        <table  className="table table-striped table-sm">
                <thead className="thead-dark">
                    <tr>
                        <th className="clickable">Product</th>
                        <th className="clickable" >Company</th>
                        <th className="clickable" >Price </th>
                        <th className="clickable">Type</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody  >
                    {products.map(prod =>
                        <tr key= {prod._id}>
                        <td><Link to={`/products/${prod._id}`} >{prod.productName}</Link></td>
                        <td>{prod.companyName}</td>
                        <td>{prod.price}</td>
                        <td>{prod.type}</td>
                       <td><button style={{verticalAlign : "center"}} onClick={() => onDelete(prod._id)} className="btn btn-danger btn-sm">Delete</button></td>
                    
                    </tr>
                        )}
                    
                </tbody>
            </table>

         );
    }
}
 
export default ProductTable;