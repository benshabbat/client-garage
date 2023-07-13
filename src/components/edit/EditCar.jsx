import { useState } from "react";
import { Form, OpenModel } from "../index";
import { updateCar } from "../../Utils";
import {ValidCar} from "../../validation/ValidCar"
const EditCar = ({ handelClick, isOpen, car }) => {
  const [formData, setFormData] = useState(car);
  // const [isValidCar, setIsValidCar] = useValidCar();
  const onSubmit = async (e) => {
    e.preventDefault();
    // isValidCar
    //   ? await updateCar(car?._id, formData)
    //   : console.log("ERROR");

    handelClick();
  };
  // setIsValidCar(formData);

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
              pattern:
                "[0-9]{3}[-][0-9]{2}[-][0-9]{3}|[0-9]{2}[-][0-9]{3}[-][0-9]{2}|[0-9]{7,8}",
              title: "Number of car must 00-000-00 OR 000-00-000",
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
