import React from 'react'
import './orderDetails.styles.css'

const OrderDetails = () => {
  return (
    <div className='order-details'>
        <div className="upper-content">
            <h2>Order Details</h2>
            <div className="buttons-section">
                <button>Open Documentation</button>
                <button>Setup Details</button>
                <button>•••</button>
            </div>
        </div>
        <p>In the order details section, you can review and manage all orders with their details. You can view and edit many information such as IDs of all orders, ordered product, order date, price and order status. Access to this area is limited. Only administrators and team leaders can reach.The changes you make will be approved after they are checked. 
</p>

    </div>
  )
}

export default OrderDetails