import { useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
import useValidCar from "../../hooks/useValidCar";

const CreateCar = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState();

  const isValidCar = useValidCar(formData?.numberPlate);
  const onSubmit = async (e) => {
    e.preventDefault();
    if (isValidCar) {
      await createCar(user?._id, formData);
      handelClick();
    } else console.log("ERROR");
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
              // pattern:
              //   "[0-9]{3}[-][0-9]{2}[-][0-9]{3}|[0-9]{2}[-][0-9]{3}[-][0-9]{2}|[0-9]{7,8}",
              title: "Number of car must 00-000-00 OR 000-00-000",
              errorMessage: "Something went wrong",
              isError: (!isValidCar),
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
