import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createUser } from "../../Utils";
import { Form, OpenModel } from "..";
import {valid, validPhone, validPass, validEmail } from "../../validation/Valid";

const Register = ({ handelClick, isOpen }) => {
  const { users } = useSelector((state) => state?.admin);
  const [formData, setFormData] = useState();
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPass, setIsValidPass] = useState(false);

  const [isValidUser, setIsValidUser] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsValidUser(
      users.map((user) => user.username).includes(formData?.username)
    );
    if (isValidPhone && !isValidUser && isValidEmail && isValidPass) {
      await createUser(formData);
      handelClick();
    }
  };
  useEffect(() => {
    setIsValidPhone(validPhone(formData?.phone));
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
              invalid: isValidEmail,
              title: "regex@gmail.com",
              isError: !isValidEmail,
              errorMessage: "Your Email is wrong",
            },
            {
              name: "phone",
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
