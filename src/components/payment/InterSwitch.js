import React from 'react'
import { useHistory } from 'react-router-dom';
import { InterswitchPay } from 'react-interswitch'
import { verifyPayment } from "../../functions/payment";

function InterSwitch({ reference, amount, customerEmail, callBack }) {
  const history = useHistory();

  const verify = async res => {
    const data = await verifyPayment(res.txnref, res.payRef);
    if (data.status) history.push(`/order/success/${res.txnref}/res.payRef`);
    else callBack({ error: true, cancel: false, res, reverify: true });
  }

  const handleTransctionComplete = res => {
    if (['00', '10', '11', '16'].findIndex(item => item === res.resp.toString()) > -1) return verify(res)
    else if(([ '17','Z6','Z61','Z69' ]).findIndex(item => item === res.resp.toString()) > -1) return callBack({ error: true, cancel: true, data: res })
  }


  const paymentParameters = {
    merchantCode: process.env.MERCHANT_CODE,
    payItemID: process.env.PAY_ITEM_ID,
    customerEmail,
    text: `Proceed to payment (${amount})`,
    mode: process.env.PRODUCTION_MODE ? 'LIVE' : 'TEST',
    transactionReference: reference,
    amount,
    style: {
      width: '200px',
      height: '40px',
      border: 'none',
      color: '#fff',
      backgroundColor: '#ff0000'
    },
    callback: handleTransctionComplete
  }
  

  return (
    <>
      {  <InterswitchPay {...paymentParameters} />}
    </>

  )
}

export default InterSwitch
