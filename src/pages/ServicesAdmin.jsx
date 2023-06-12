import "../components/table/table.css";
import React, { useState, useEffect } from "react";
import useOpenModel from "../hooks/useOpenModel";
import ManageService from "../components/manage/ManageService";
import { useDispatch } from "react-redux";
import { getServicesByType } from "../features/admin/adminSlice";
const ServicesAdmin = ({ services }) => {
  const [servicesFilter, setServicesFilter] = useState();
  const [service, setService] = useState();
  const [handelService, isOpenService] = useOpenModel();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getServicesByType());
  }, [isOpenService]);
  const filterSearch = (e) => {
    const { value } = e.target;

    setServicesFilter(
      services.filter(
        (item) =>
          item.car?.numberPlate.includes(value) ||
          item.title.includes(value) ||
          item.description.includes(value) ||
          item.price.toString().includes(value) ||
          item.paid.toString().includes(value) ||
          item.status.includes(value)
      )
    );
  };
  const handleServiceId = (e) => {
    if (e.target.value) {
      console.log(e.target.value);
      setService(services.find((service) => service._id === e.target.value));
      handelService();
    }
  };
  const bodyServices = (service) => {
    return (
      <tr key={service?._id}>
        <td>
          <button value={service?._id} onClick={handleServiceId}>
            Manage
          </button>
        </td>
        <td>{service?.car?.numberPlate}</td>
        <td>{service?.title}</td>
        <td>{service?.description}</td>
        <td>{service?.price}</td>
        <td>{service?.paid ? "true" : "false"}</td>
        <td>
          <div className={`status ${service?.status}`}>{service?.status}</div>
        </td>
      </tr>
    );
  };
  return (
    <>
      <div className="table-container">
        <section className="table__header">
          <h1>Services</h1>
          <div className="input-group">
            <input
              type="search"
              placeholder="Search Data..."
              onChange={filterSearch}
            />
          </div>
        </section>
        <section className="table__body">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>car</th>
                <th>title</th>
                <th>description</th>
                <th>price</th>
                <th>paid</th>
                <th>status</th>
              </tr>
            </thead>
            <tbody>
              {servicesFilter
                ? servicesFilter?.map(bodyServices)
                : services?.map(bodyServices)}
            </tbody>
          </table>
        </section>
      </div>
      <ManageService
        service={service}
        handelClick={handelService}
        isOpen={isOpenService}
      />
    </>
  );
};

export default ServicesAdmin;
