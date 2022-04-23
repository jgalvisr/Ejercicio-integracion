import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import './Product.scss';

export const Products = () => {
  const url = '/api/products';
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  // No logré enviar el access_token al API :(
  const fetchProducts = async () => {
    const resp = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('access_token')
      }
    });
    const data = await resp.json();

    const productsFromBE = data.products.map((resp) => {
      return {
        id: resp.id,
        title: resp.id,
        url: resp.thumbnail,
        price: `${resp.price} ${resp.currency_id}`,
      };
    });
    setProducts(productsFromBE);
  };
  return (
    <>
      <div className='products'>
        <h1>Products</h1>
        <div className='products-card-container'>
          {products.map((elm, index) => (
            <Card
              key={elm.id}
              title={elm.title}
              url={elm.url}
              description={elm.price}
            ></Card>
          ))}
        </div>
      </div>
    </>
  );
};
