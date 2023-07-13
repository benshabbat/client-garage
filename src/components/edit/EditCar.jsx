import { useEffect, useState } from "react";
import { Form, OpenModel } from "../index";
import { updateCar } from "../../Utils";
import { validCar } from "../../validation/Valid";
const EditCar = ({ handelClick, isOpen, car }) => {
  const [formData, setFormData] = useState(car);
  const [isValidCar, setIsValidCar] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    isValidCar ? await updateCar(car?._id, formData) : console.log("ERROR");

    handelClick();
  };
  useEffect(() => {
    setIsValidCar(validCar(formData?.numberPlate));
  }, [formData?.numberPlate]);
  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Edit Car"
          sec_title="enter your name & password"
          inputs={[
            {
              name: "numberPlate",
              type: "text",
              value: formData?.numberPlate,
              title: "Number of car must 00-000-00 OR 000-00-000",
              errorMessage: "Your Car numer is wrong",
              isError: !isValidCar,
              invalid: isValidCar,
            },
            {
              name: "km",
              type: "number",
              value: formData?.km,
              min: car?.km,
            },
            { name: "brand", type: "text", value: formData?.brand },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default EditCar;
