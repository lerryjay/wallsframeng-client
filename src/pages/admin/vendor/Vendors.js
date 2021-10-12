import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AdminNav from "../../../components/nav/AdminNav";
import { getVendors } from "../../../functions/admin";
import { Spin } from "antd";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(false);

  // redux
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    fetchVendors();
  }, []);

  const fetchVendors = () => {
    setLoading(true);
    getVendors(user.token)
      .then((res) => {
        setVendors(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };
  return (
    <>
      <div className="container-fluid p-4">
        <AdminNav />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl text-center">
            {loading ? (
              <Spin size="large" />
            ) : (

              <h4>Registered Vendors</h4>
            )}
          </div>
          <div className="col-xl text-end">
            {/* <Link to="/admin/product" className="btn btn-warning">Add Vendoo</Link> */}
          </div>
        </div>


        <div className="row">
          <table class="table table-striped table-inverse table-responsive">
            <thead class="thead-inverse">
              <tr className="text-center">
                <th>Store Name</th>
                <th>Email</th>
                <th>Telephone</th>
              </tr>
            </thead>
            <tbody>
              {vendors.map(vendor => <tr className="text-center">
                <td scope="row">{vendor.name}</td>
                <td>{vendor.email}</td>
                <td>{vendor.telephone}</td>
              </tr>)}
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
};

export default Vendors;