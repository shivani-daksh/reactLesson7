import { useParams } from 'react-router';
import dayjs from 'dayjs';
import axios from 'axios';
import { Header } from '../components/Header'
import './TrackingPage.css'
import { useEffect, useState} from 'react';

export function TrackingPage({cart}) {
  const [ order, setOrder ] = useState(null);
const { orderId, productId } = useParams();
  



useEffect(() => {

  const fetchTrackingData = async () => {
 const response = await axios.get(`/api/orders/${orderId}/?expand=products`);
   setOrder(response.data); 
  };

  fetchTrackingData();

}, [orderId]);

// console.log(order);


if (!order) {
  return <p>hello you have came too000000 far</p> ;
}


    const orderProduct = order.products.find((orderProduct) => (
       orderProduct.productId === productId
    )
    )
    //console.log(orderProduct);


    const totalDeliveryTimeMs = orderProduct.estimatedDeliveryTimeMs - order.orderTimeMs;
    //console.log(totalDeliveryTimeMs);

    const timePassedMs = dayjs().valueOf() - order.orderTimeMs;
    //console.log(timePassedMs);
    
    let deliveryPercent = (timePassedMs / totalDeliveryTimeMs) * 100;
  if (deliveryPercent > 100) {
    deliveryPercent = 100;
  }

  return (
    <>
    <title>Tracking</title>
    <link rel="icon" type="image" href="tracking-favicon.png" />

    <Header cart={cart}/>

    <div className="tracking-page">
      <div className="order-tracking">
        <a className="back-to-orders-link link-primary" href="/orders">
          View all orders
        </a>

        <div className="delivery-date">
          Arriving on {dayjs(orderProduct.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
        </div>

        <div className="product-info">
         {orderProduct.product.name}
        </div>

        <div className="product-info">Quantity: {orderProduct.quantity}</div>

        <img
          className="product-image"
          src={orderProduct.product.image}
        />

        <div className="progress-labels-container">
          <div className="progress-label">Preparing</div>
          <div className="progress-label current-status">Shipped</div>
          <div className="progress-label">Delivered</div>
        </div>

        <div className="progress-bar-container">
          <div className="progress-bar" style={{width: `${deliveryPercent}%`}}></div>
        </div>
      </div>
    </div>
    
    </>
  );
}