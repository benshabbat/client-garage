import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { Form, OpenModel } from "..";
const Login = ({ handelClick, isOpen }) => {
  const [formData, setFormData] = useState();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(login(formData));
    handelClick();
  };

  return (
    <OpenModel
      comp={
        <Form
          setData={setFormData}
          title="Login"
          sec_title="enter your name & password"
          inputs={[
            { name: "username", type: "text" },
            { name: "password", type: "password" },
          ]}
          handelClick={handelClick}
          onSubmit={onSubmit}
        />
      }
      isOpen={isOpen}
    />
  );
};

export default Login;
