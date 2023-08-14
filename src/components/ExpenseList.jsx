import React, { useEffect, useState } from "react";

const ExpenseList = ({data}) => {
  console.log('ExpenseList render')
	const [products, setProducts] = useState([]);
  const [total,setTotal] = useState(0);

  // Detete Product
	const deleteProduct = (id) => {
    localStorage.removeItem(id);
    let temp = 0;
		const newProduct = products.filter((product) => {
      if (product.productId === id) {
        temp = parseInt(product.productPrice);
        return false;
      } else {
        return true;
      }
    });
		setProducts(newProduct);
    setTotal(total - temp);
	};
	
  // Getting data from localstorage
  useEffect(() => {
    console.log('1. useEffect inside ExpenseList');
    let totalSum = 0;
		const data = Object.values(localStorage).map((product) => {
      const prod = JSON.parse(product)
      totalSum += parseInt(prod.productPrice)
			return prod;
    });
		setProducts(data);
    setTotal(totalSum)
	}, []);

  // Getting data after addition 
  useEffect(() => {
    console.log('2. useEffect inside ExpenseList');
    if(data) {
      setProducts((prevState) => [...prevState,data])
      setTotal((prevState) => prevState + parseInt(data.productPrice))
    }
  },[data])
	return (
		<div>
			<h1>Products</h1>
			<ul>
				{products.map((product) => {
					return (
						<li key={product.productId}>
							{product.productPrice} - {product.productName}{" "}
							<button
								onClick={() => deleteProduct(product.productId)}
							>
								Delete Product
							</button>
						</li>
					);
				})}
			</ul>
      {total ? <h1>Total Value Worth of Products: Rs {total}</h1> : ''}
      
		</div>
	);
};

export default ExpenseList;
