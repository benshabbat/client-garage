import { useEffect, useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
import { validCar } from "../../validation/Valid";
const CreateCar = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState();
  const [isValidCar, setIsValidCar] = useState();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isValidCar) {
      await createCar(user?._id, formData);
      handelClick();
    }
  };
  useEffect(() => {
    setIsValidCar(validCar(formData?.numberPlate));
  }, [formData?.numberPlate]);

  return (
    <OpenModel
      comp={
        <Form
        data
          setData={setFormData}
          title="Create Car"
          inputs={[
            // { name: "username", type: "text" },
            {
              name: "numberPlate",
              // title: "Number of car must 00-000-00 OR 000-00-000",
              // errorMessage: "Your Car numer is wrong",
              isError: !isValidCar,
              invalid: isValidCar,
            },
            { name: "km", type: "number", min: 0 },
            { name: "brand" },
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
