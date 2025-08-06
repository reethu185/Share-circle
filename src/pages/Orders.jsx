import React from 'react';

const Orders = () => {
  const boxIcon = "https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/e-commerce/boxIcon.svg";

  const orders = [
    {
      id: 1,
      items: [{ product: { name: "Nike Air Max 270" }, quantity: 1 }],
      address: {
        firstName: "John",
        lastName: "Doe",
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipcode: "10001",
        country: "USA"
      },
      amount: 320.0,
      paymentType: "Credit Card",
      orderDate: "10/10/2022",
      isPaid: true
    },
    {
      id: 2,
      items: [{ product: { name: "Adidas Ultraboost" }, quantity: 2 }],
      address: {
        firstName: "Alice",
        lastName: "Smith",
        street: "456 Park Ave",
        city: "Los Angeles",
        state: "CA",
        zipcode: "90001",
        country: "USA"
      },
      amount: 500.0,
      paymentType: "UPI",
      orderDate: "15/11/2022",
      isPaid: false
    },
    {
      id: 3,
      items: [{ product: { name: "Puma RS-X" }, quantity: 1 }],
      address: {
        firstName: "Bob",
        lastName: "Brown",
        street: "789 Sunset Blvd",
        city: "Chicago",
        state: "IL",
        zipcode: "60601",
        country: "USA"
      },
      amount: 250.0,
      paymentType: "Cash On Delivery",
      orderDate: "20/12/2022",
      isPaid: true
    }
  ];

  return (
    <div className="md:p-10 p-4 space-y-6 bg-[#1F1F1F] min-h-screen text-[#E0F7D1]">
      <h2 className="text-2xl font-semibold">🧾 Orders List</h2>

      {orders.map((order, index) => (
        <div
          key={index}
          className="flex flex-col md:grid md:grid-cols-[2fr_1.5fr_1fr_1.5fr] gap-5 p-5 max-w-5xl rounded-md border border-gray-700 bg-[#2A2A2A] shadow-md"
        >
          {/* Product Info */}
          <div className="flex gap-4">
            <img className="w-12 h-12 object-cover opacity-70" src={boxIcon} alt="boxIcon" />
            <div>
              {order.items.map((item, idx) => (
                <p key={idx} className="font-semibold text-[#E0F7D1]">
                  {item.product.name}
                  {item.quantity > 1 && (
                    <span className="text-green-400"> x{item.quantity}</span>
                  )}
                </p>
              ))}
            </div>
          </div>

          {/* Address */}
          <div className="text-sm leading-5">
            <p className="font-semibold">{order.address.firstName} {order.address.lastName}</p>
            <p className="text-gray-300">
              {order.address.street}, {order.address.city}, {order.address.state}, {order.address.zipcode}, {order.address.country}
            </p>
          </div>

          {/* Amount */}
         {/* Amount in ₹ INR */}
<p className="font-bold text-lg text-green-400 my-auto">
  {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(order.amount)}
</p>


          {/* Payment Info */}
          <div className="text-sm flex flex-col gap-1">
            <p><span className="text-gray-400">Method:</span> {order.paymentType}</p>
            <p><span className="text-gray-400">Date:</span> {order.orderDate}</p>
            <p>
              <span className="text-gray-400">Payment:</span>{' '}
              <span className={order.isPaid ? "text-green-400 font-semibold" : "text-red-400 font-semibold"}>
                {order.isPaid ? "Paid" : "Pending"}
              </span>
            </p>
            
          </div>
        </div>
      ))}
    </div>
  );
};

export default Orders;
