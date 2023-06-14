import { useState } from "react";
import { OpenModel, Form } from "..";
import { createCar } from "../../Utils";
const CreateCar = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    isValidCar(formData?.numberPlate)? await createCar(user?._id, formData): console.log("ERROR")
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
          title="Create Car"
          inputs={[
            // { name: "username", type: "text" },
            {
              name: "numberPlate",
              type: "text",
              // pattern:
              //   "[0-9]{3}[-][0-9]{2}[-][0-9]{3}|[0-9]{2}[-][0-9]{3}[-][0-9]{2}|[0-9]{7,8}",
              title: "Number of car must 00-000-00 OR 000-00-000",
              
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
