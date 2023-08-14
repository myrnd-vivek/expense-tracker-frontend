import React, { useState } from "react";

export const initialState = {
  productId: '',
  productPrice: '',
  productName: ''
}

const AddExpense = ({setData}) => {
  const [product,setProduct] = useState(initialState);
  
  const idChangeHandler = (ev) => {
    setProduct({...product, productId: ev.target.value})
  }

  const priceChangeHandler = (ev) => {
    setProduct({...product, productPrice: ev.target.value})
  }

  const nameChangeHandler = (ev) => {
    setProduct({...product, productName: ev.target.value})
  }

  const addProduct = (ev) =>  {
    ev.preventDefault();
    localStorage.setItem(product.productId,JSON.stringify(product))
    setData(product)
    setProduct(initialState);
  }

	return (
		<form>
			<div>
				<label>Product ID:</label>
				<input type="number" value={product.productId} onChange={idChangeHandler}/>
			</div>
			<div>
				<label>Selling Price:</label>
				<input type="number" value={product.productPrice} onChange={priceChangeHandler}/>
			</div>
			<div>
				<label>Product Name:</label>
				<input type="text" value={product.productName} onChange={nameChangeHandler}/>
			</div>
      <button onClick={addProduct}>Add Product</button>
		</form>
	);
};

export default AddExpense;
