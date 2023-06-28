import React from 'react';

const LargeProductListItem = ({ product }) => {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>price: {price}</p>
      <h3>description</h3>
      <p>{description}</p>
      <p>avg rating: {rating}</p>
    </>
  );
};

export default LargeProductListItem;
