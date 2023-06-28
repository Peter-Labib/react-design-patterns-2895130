import React from 'react'

const SmallProductListItem = ({person}) => {
    const {name, age} = person
  return (
    <p>name:{name} age:{age}</p>
  )
}

export default SmallProductListItem