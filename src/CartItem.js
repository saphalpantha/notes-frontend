import React from 'react'

const CartItem = (props) => {
  return (  
    <div className='cart_items'>
        <h3>{props.item.name}</h3>
        <span>{props.item.price}</span>
    </div>
  )
}

export default CartItem