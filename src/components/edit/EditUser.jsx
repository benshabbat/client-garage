import { useState, useEffect } from "react";
import { Form, OpenModel } from "../index";
import { updateUser } from "../../Utils";
import {
  valid,
  validPhone,
  validPass,
  validEmail,
} from "../../validation/Valid";
const EditUser = ({ handelClick, isOpen, user }) => {
  const [formData, setFormData] = useState(user);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();
    await updateUser(user?._id, formData);
    handelClick();
  };
  useEffect(() => {
    setIsValidPhone(valid(formData?.phone, "phone"));
  }, [formData?.phone]);

  useEffect(() => {
    setIsValidPass(validPass(formData?.password));
  }, [formData?.password]);

  useEffect(() => {
    setIsValidEmail(validEmail(formData?.email));
  }, [formData?.email]);

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Edit User"
          sec_title="enter your name & password"
          inputs={[
            // { name: "username", type: "text" },
            { name: "username", value: formData?.username },
            {
              name: "email",
              type: "email",
              value: formData?.email,
              invalid: isValidEmail,
              title: "regex@gmail.com",
              isError: !isValidEmail,
              errorMessage: "Your Email is wrong",
            },
            {
              name: "phone",
              value: formData?.phone,
              invalid: isValidPhone,
              title: "Number of phone must 050-1234567",
              errorMessage: "Your phone number is wrong",
              isError: !isValidPhone,
            },
            {
              name: "password",
              type: "password",
              min: 8,
              invalid: isValidPass,
              isError: !isValidPass,
              title:
                "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
              errorMessage: "Your password is wrong",
              value: formData?.password,
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

export default EditUser;
