import "../components/table/table.css";
import React, { useState, useEffect } from "react";
import useOpenModel from "../hooks/useOpenModel";
import ManageCar from "../components/manage/ManageCar";
import { getCarsByType } from "../features/admin/adminSlice";
import { useDispatch } from "react-redux";
const Cars = ({ userId, cars = null }) => {
  const [car, setCar] = useState();
  const [handleManageCar, isOpenManageCar] = useOpenModel();
  const [filterCars, setFilterCars] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsByType(userId));
  }, []);
  const filterSearch = (e) => {
    const { value } = e.target;
    setFilterCars(
      cars.filter(
        (item) =>
          item.owner?.username.includes(value) ||
          item.numberPlate.includes(value) ||
          item.km.toString().includes(value) ||
          item.brand.includes(value)
      )
    );
  };
  const handleCar = (e) => {
    if (e.target.value) {
      setCar(cars.find((car) => car._id === e.target.value));
      console.log(car);
      handleManageCar();
    }
  };
  const bodyCars = (car) => {
    return (
      <tr key={car?._id}>
        <td>
          <button value={car?._id} onClick={handleCar}>
            Manage
          </button>
        </td>
        <td>{car?.owner?.username}</td>
        <td>{car?.numberPlate}</td>
        <td>{car?.km}</td>
        <td>{car?.brand}</td>
      </tr>
    );
  };
  return (
    <>
      <div className="table-container">
        <section className="table__header">
          <h1>Cars</h1>
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
                <th>owner</th>
                <th>numberPlate</th>
                <th>km</th>
                <th>brand</th>
              </tr>
            </thead>
            <tbody>
              {filterCars ? filterCars?.map(bodyCars) : cars?.map(bodyCars)}
            </tbody>
          </table>
        </section>
      </div>
      <ManageCar
        car={car}
        handelClick={handleManageCar}
        isOpen={isOpenManageCar}
      />
    </>
  );
};

export default Cars;
