import React from 'react'

import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import './cart-dropdown.styles.scss'
import CustomButton from '../../componenets/custom-button/custom-button.component'
import {selectCartItems} from '../../redux/cart/cart.selectors'
const CartDropdown = ({cartItems}) =>{
     console.log(cartItems)
    return (
    <div className='cart-dropdown'>
        <div className='cart-item' >
        {
                cartItems.map(cartItem=>(
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)};

const mapStateToProps=(state)=>({
  cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);