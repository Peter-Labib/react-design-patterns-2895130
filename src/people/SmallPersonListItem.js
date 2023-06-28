import React from 'react';

const SmallPersonListItem = ({ person }) => {
  const { name, age } = person;
  return (
    <p>
      name:{name} age:{age}
    </p>
  );
};

export default SmallPersonListItem;
