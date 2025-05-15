import dayjs from "dayjs";



export  function DeliveryDate({deliveryOptions, cartItem}){
  
     const selectedDeliveryoption = deliveryOptions.find(
            (deliveryOption) => {
              return deliveryOption.id === cartItem.deliveryOptionId;
            } );
         
              return (
                  <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryoption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
  );
}