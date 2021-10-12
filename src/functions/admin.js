import axios from "axios";


export const getVendors = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/vendors`, {
    headers: {
      authtoken,
    },
  });

export const getOrders = async (authtoken) =>
  await axios.get(`${process.env.REACT_APP_API}/admin/orders`, {
    headers: {
      authtoken,
    },
  });

export const updateOrderStatus = async (orderId, orderStatus, authtoken) =>
  await axios.patch(
    `${process.env.REACT_APP_API}/admin/order-status`,
    { orderId, orderStatus },
    {
      headers: {
        authtoken,
      },
    }
  );
