import { useEffect, useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
import ValidCar from "../../validation/ValidCar";

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
  useEffect(()=>{
    setIsValidCar(ValidCar(formData?.numberPlate));
  },[handelClick])

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
