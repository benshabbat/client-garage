import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { createUser } from "../../Utils";
import { Form, OpenModel } from "..";
const Register = ({ handelClick, isOpen }) => {
  const PHONE_REGEX = /^[0-9]{3}[-][0-9]{7}|[0-9]{10}$/;
  const { users } = useSelector((state) => state?.admin);
  const [formData, setFormData] = useState();
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [isValidUser, setIsValidUser] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsValidUser(
      users.map((user) => user.username).includes(formData?.username)
    );
    if (isValidPhone && !isValidUser) {
      await createUser(formData);
      handelClick();
    }
  };
  useEffect(() => {
    if ((formData?.phone.length === 10 && +formData.phone) || (formData?.phone.length === 11 && formData.phone.at(3)==="-")) {
      const result = PHONE_REGEX.test(formData?.phone);
      setIsValidPhone(result);
    } else setIsValidPhone(false);
  }, [formData?.phone]);

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
              type: "text",
              errorMessage: "Username is exist",
              isError: isValidUser,
            },
            { name: "email", type: "email" },
            {
              name: "phone",
              type: "text",
              invalid: isValidPhone,
              title: "Number of phone must 050-1234567",
              errorMessage: "Your phone number is wrong",
              isError: !isValidPhone,
              // value:formData?.phone
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
