import { useState } from "react";
import { useSelector } from "react-redux";
import { createUser } from "../../Utils";
import { Form, OpenModel } from "..";
import {
  valid,
  validPhone,
  validPass,
  validEmail,
} from "../../validation/Valid";

const Register = ({ handelClick, isOpen }) => {
  const { users } = useSelector((state) => state?.admin);
  const [formData, setFormData] = useState();
  const [isValidUser, setIsValidUser] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsValidUser(
      users.map((user) => user.username).includes(formData?.username)
    );
    if (
      validPhone(formData?.phone) &&
      !isValidUser &&
      validPass(formData?.password) &&
      validEmail(formData?.email)
    ) {
      await createUser(formData);
      handelClick();
    }
  };
  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create User"
          sec_title="enter your name & password"
          inputs={[
            {
              name: "username",
              errorMessage: "Username is exist",
              isError: isValidUser,
            },
            {
              name: "email",
              type: "email",
              title: "regex@gmail.com",
              errorMessage: "Your Email is wrong",
            },
            {
              name: "phone",
              title: "Number of phone must 050-1234567",
              errorMessage: "Your phone number is wrong",
            },
            {
              name: "password",
              type: "password",
              min: 8,
              title:
                "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
              errorMessage: "Your password is wrong",
            },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default Register;
