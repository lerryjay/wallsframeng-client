import React, {useState, useEffect} from "react";
import AdminNav from "../../components/nav/AdminNav";
import { getOrders, changeStatus } from "../../functions/admin";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import {Spin} from "antd";
import Orders from "../../components/order/Orders";


const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = () =>
    getOrders(user.token).then((res) => {
      console.log(JSON.stringify(res.data, null, 4));
      setOrders(res.data);
    });

  const handleStatusChange = (orderId, orderStatus) => {
    changeStatus(orderId, orderStatus, user.token).then((res) => {
      toast.success("Status updated");
      loadOrders();
    });
  };

  return (
    <>
      <div className="container-fluid p-4">   
        <AdminNav />
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

export default AdminDashboard;
