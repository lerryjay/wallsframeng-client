import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";

const LoadingToRedirect = () => {
  const [count, setCount] = useState(5);
  let history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect once count is equal to 0
    count === 0 && history.push("/");
    // cleanup
    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <div className="container">
      <div className="row mt-5">
        <Spin size="large" />

        <div className="mt-5">
          <h1 className="text-center">Coming Up in {count} seconds</h1>
        </div>
      </div>
    </div>
  );
};

export default LoadingToRedirect;