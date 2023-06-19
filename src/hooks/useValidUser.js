import { useSelector } from "react-redux";
const useValidUser = (data) => {
  const { users } = useSelector((state) => state?.admin);
  const isUserExist = users?.find((user) => user?.username === data);
  console.log(isUserExist)
  if (isUserExist===undefined) return true;
  else return false;
};
export default useValidUser;
