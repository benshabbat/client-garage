import { useEffect, useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
import { validCar } from "../../validation/Valid";
const CreateCar = ({ handelClick, isOpen, user }) => {
  const CAR_REGEX = /^[0-9]{3}[-][0-9]{2}[-][0-9]{3}|[0-9]{2}[-][0-9]{3}[-][0-9]{2}|[0-9]{7,8}$/;
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
    // if (
    //   (((formData?.numberPlate.length === 8)||(formData?.numberPlate.length === 7)) && +formData.numberPlate) ||
    //   (formData?.numberPlate.length === 10 &&formData.numberPlate.at(3) === "-"&& formData.numberPlate.at(6) === "-") ||
    //   (formData?.numberPlate.length === 9 && formData.numberPlate.at(2) === "-"&& formData.numberPlate.at(6) === "-")
    // ) {
    //   setIsValidCar(CAR_REGEX.test(formData?.numberPlate));
    // } else setIsValidCar(false);
    setIsValidCar(validCar(formData?.numberPlate));
  }, [formData?.numberPlate]);

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
