import React from "react";

const ShowPaymentInfo = ({ order, showStatus = true }) => (
  <div>
    <p>
      <span>Order Id: {order.payment.reference}</span>
      {" / "}
      <span>
        Amount:{" / "}
        {(order.payment.amount || 0).toLocaleString("en-US", {
          style: "currency",
          currency: order.payment.currency,
        })}
      </span>
      {" / "}
      <span>Currency: {order.payment.currency}</span>
      {" / "}
      <span>Method: {order.payment.method}</span>
      {" / "}
      <span>Payment: {order.payment.status.toUpperCase()}</span>
      {" / "}
      <span>
        Date:{" / "}
        {new Date(order.payment.createdAt * 1000).toLocaleString()}
      </span>
      {" / "}
      <br />
      {showStatus && (
        <span className="badge bg-primary text-white">
          STATUS: {order.orderStatus}
        </span>
      )}
    </p>
  </div>
);

export default ShowPaymentInfo;
