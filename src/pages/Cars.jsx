import "../components/table/table.css";
import React, { useState, useEffect } from "react";
import useOpenModel from "../hooks/useOpenModel";
import ManageCar from "../components/manage/ManageCar";
import { getCarsByType } from "../features/admin/adminSlice";
import { useDispatch } from "react-redux";
import EditCar from "../components/edit/EditCar";
const Cars = ({ userId, cars = null }) => {
  const [car, setCar] = useState();
  const [handleManageCar, isOpenManageCar] = useOpenModel();
  const [filterCars, setFilterCars] = useState();
  const [handleEditCar, isOpenModelEditCar] = useOpenModel();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCarsByType(userId));
  }, [isOpenManageCar]);
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
  const handleCar = async (e) => {
    e.preventDefault();
    const { name } = e.target;
    if (e.target.value) {
      setCar(cars.find((car) => car._id === e.target.value));
      // console.log(car);
      // handleManageCar();
      // if (name === "editCar") {
      // setCar(cars.find((car) => car._id === e.target.value));
      // dispatch(getCars());
      // }
      handleEditCar();
    }
  };
  const bodyCars = (car) => {
    return (
      <tr key={car?._id}>
        {/* <td>
          <button value={car?._id} onClick={handleCar}>
            Manage
          </button>
        </td> */}
        <td>{car?.owner?.username}</td>
        <td>{car?.numberPlate}</td>
        <td>
          <button name="editCar" value={car?._id} onClick={handleCar}>
            {car?.km}
          </button>
        </td>
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
                {/* <th></th> */}
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
      <EditCar
        car={car}
        handelClick={handleEditCar}
        isOpen={isOpenModelEditCar}
      />
    </>
  );
};

export default Cars;
