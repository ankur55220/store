import React from 'react'

import './cart-dropdown.styles.scss'
import CustomButton from '../../componenets/custom-button/custom-button.component'

const CartDropdown = () =>(
    <div className='cart-dropdown'>
        <div className='cart-item' />
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);


export default CartDropdown;