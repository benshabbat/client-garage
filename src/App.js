import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components";
import {
  Account,
  Services,
  Messages,
  PageLanding,
  Users,
  Cars,
  ServicesAdmin,
} from "./pages";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "./features/user/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { user: userAuth } = useSelector((state) => state.auth);
  const { messages, user } = useSelector((state) => state.user);
  const { services, cars, users } = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (userAuth?._id) dispatch(getUser(userAuth?._id));
  }, [userAuth]);
  return (
    <>
      <BrowserRouter>
        <Header userAuth={userAuth} user={user} />{/*check */}
        <Routes>
          <Route path="/" element={<PageLanding />} />
          <Route path="/account" element={<Account user={user} />} />
          {/*check */}
          <Route path="/users" element={<Users users={users} />} /> {/*check */}
          <Route
            path="/cars"
            element={<Cars userId={user?._id} cars={cars} />}
          />
          {/*check */}
          <Route
            path="/messages"
            element={<Messages messages={messages} user={user} users={users} />}
          />
          {/*check */}
          <Route
            path="/services"
            element={<ServicesAdmin services={services} />}
          />
          {/*check */}
          <Route path="/services/user/" element={<Services user={user} />} />{/*check */}
          <Route
            path="/services/car/:carId"
            element={<Services user={user} />}
          />{/*check */}
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}
export default App;
