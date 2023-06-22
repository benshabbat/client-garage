import { useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
import ValidCar from "../../validation/ValidCar";

const CreateCar = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState({
    numberPlate: "",
    km: "",
    brand: "",
  });
  const [isValidCar, setIsValidCar] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsValidCar(ValidCar(formData?.numberPlate));
    console.log(isValidCar, "Before create car");
    if (
      isValidCar &&
      formData?.numberPlate.length >= 7 &&
      formData?.numberPlate.length < 11
    ) {
      console.log(isValidCar, "After create car");
      await createCar(user?._id, formData);
      handelClick();
    }
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create Car"
          inputs={[
            // { name: "username", type: "text" },
            {
              name: "numberPlate",
              type: "text",
              value: formData?.numberPlate,
              pattern:
                "[0-9]{3}[-][0-9]{2}[-][0-9]{3}|[0-9]{2}[-][0-9]{3}[-][0-9]{2}|[0-9]{7,8}",
              title: "Number of car must 00-000-00 OR 000-00-000",
              errorMessage: "Your Car numer is wrong",
              isError: !isValidCar,
            },
            { name: "km", type: "number", min: 0 },
            { name: "brand", type: "text" },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default CreateCar;
