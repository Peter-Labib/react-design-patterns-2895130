import React from 'react';

const SmallProductListItem = ({ product }) => {
  const { name, price } = product;
  return (
    <div>
      {name} - {price}
    </div>
  );
};

export default SmallProductListItem;
