import React, { useState, useEffect } from "react";
import VendorNav from "../../components/nav/VendorNav";

import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Spin } from "antd";
import Orders from "../../components/order/Orders";
import { getOrders, updateOrderStatus } from '../../functions/vendor'


const VendorDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () =>
    getOrders(user.token).then((res) => {
      setOrders(res.data);
    });

  const handleStatusChange = (orderId, orderStatus) => {
    updateOrderStatus(user.token, orderId, orderStatus,).then((res) => {
      toast.success("Status updated");
      loadOrders();
    });
  };

  return (
    <>
      <div className="container-fluid p-4">
        <VendorNav />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-10">
            <h4>Orders</h4>
            <Orders orders={orders} handleStatusChange={handleStatusChange} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorDashboard;