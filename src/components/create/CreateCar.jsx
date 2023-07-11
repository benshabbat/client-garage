import { useEffect, useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
import useValidCar from "../../validation/useValidCar"
const CreateCar = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState();
  const [isValidCar, setIsValidCar] = useValidCar();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (isValidCar) {
      await createCar(user?._id, formData);
      handelClick();
    }
  };
  useEffect(()=>{
    setIsValidCar(formData?.numberPlate)
  },[formData?.numberPlate])

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
              invalid: isValidCar,
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
