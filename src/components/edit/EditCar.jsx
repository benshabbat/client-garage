import { useState } from "react";
import { Form, OpenModel } from "../index";
import { updateCar } from "../../Utils";
const EditCar = ({ handelClick, isOpen, car }) => {
  const [formData, setFormData] = useState(car);
  const onSubmit = async (e) => {
    e.preventDefault();
    isValidCar(formData)
      ? await updateCar(car?._id, formData)
      : console.log("ERROR");

    handelClick();
  };
  const isValidCar = (data) => {
    // debugger;
    if (data?.length === 10 || data?.length === 9) {
      for (let i = 0; i < data.length; i++) {
        if (data?.length === 9) {
          if ((i === 2 || i === 6) && data[i] === "-") {
            i++;
          }
          if (+data[i]) {
            return true;
          }
        } else if (data?.length === 10) {
          if ((i === 3 || i === 6) && data[i] === "-") {
            i++;
          }
          if (+data[i]) {
            return true;
          }
        } else {
          return false;
        }
      }
    }

    if (data?.length <= 8 && data?.length >= 7 && +data) {
      return true;
    } else {
      return false;
    }
  };

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
              // pattern:
              //   "[0-9]{3}[-][0-9]{2}[-][0-9]{3}|[0-9]{2}[-][0-9]{3}[-][0-9]{2}|[0-9]{7,8}",
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
