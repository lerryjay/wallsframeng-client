import axios from "axios";

export const getProducts = (authtoken) => axios.get(`${process.env.REACT_APP_API}/vendor/products`, {
  headers: {
    authtoken,
  },
});


export const getOrders = (authtoken) => axios.get(`${process.env.REACT_APP_API}/vendor/orders`, {
  headers: {
    authtoken,
  },
});

export const updateOrderStatus = (authtoken, orderid, status) => axios.patch(`${process.env.REACT_APP_API}/vendor/order/${orderid}`, { status }, {
  headers: {
    authtoken,
  },
});