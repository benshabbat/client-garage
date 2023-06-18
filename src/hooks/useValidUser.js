import { useSelector } from "react-redux";
const useValidUser = (data) => {
  const { users } = useSelector((state) => state?.admin);
  const isUserExist = users?.filter((user) => user?.username === data);
  console.log(isUserExist)
  if (isUserExist===null) return false;
  else return true;
};
export default useValidUser;
