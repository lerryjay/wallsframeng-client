import axios from "axios";

export const verifyPayment = (reference,payref)=>axios.post(`${process.env.REACT_APP_API}/payments/verify`, { reference, payref });