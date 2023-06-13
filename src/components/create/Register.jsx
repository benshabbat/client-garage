import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import { register } from "../../features/auth/authSlice";
import { createUser } from "../../Utils";
import { getUsers } from "../../features/admin/adminSlice";
import { Form, OpenModel } from "..";

const Register = ({ handelClick, isOpen }) => {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    await createUser(formData);
    handelClick();
    dispatch(getUsers());
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Create User"
          sec_title="enter your name & password"
          inputs={[
            { name: "username", type: "text" },
            { name: "email", type: "email" },
            {
              name: "phone",
              type: "text",
              pattern: "[0-9]{3}[-][0-9]{7}|[0-9]{10}",
              title: "Number of phone must 050-1234567",
            },
            {
              name: "password",
              type: "password",
              min: 8,
              // title: "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
              // pattern:"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
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
