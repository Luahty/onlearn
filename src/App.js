import LoginIndex from './component/views/login.view';
import ProductIndex from './component/views/product.view';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpIndex from './component/views/signup.view';
import Contact from './component/Contact/Contact';
import Footer from './component/Footer';
import Header from './component/Header';
import Home from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import Exercises from './component/contents/ProductForm/exercises';
import Profile from './pages/Profile';
import AboutPage from './pages/AboutPage';

import { isJsonString } from "./utils";
import * as UserServices from "./services/UserService";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { updateUser } from "./redux/slide/userSlide";
import { Fragment, useEffect, useState } from 'react';
import DefaultPageWeb from './pages/DefaultPageWeb.view';
import { routes } from './routes';


function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    const { storageData, decode } = handleDecoded();
    if (decode?.user_id) {
      handleGetDetailsUser(decode?.user_id, storageData);
    }
    setLoading(false);
  }, []);

  const handleDecoded = () => {
    let storageData = localStorage.getItem("access_token");
    let decode = {};
    if (storageData && isJsonString(storageData)) {
      storageData = JSON.parse(storageData);
      decode = jwtDecode(storageData);
    }
    return { storageData, decode };
  };

  UserServices.axiosJWT.interceptors.request.use(
    async function (config) {
      const currentime = new Date();
      const { storageData, decode } = handleDecoded();

      if (decode?.exp < currentime.getTime() / 1000) {
        const data = await UserServices.refreshToken();
        config.headers["token"] = `Bearer ${data?.access_token}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  const handleGetDetailsUser = async (id, token) => {
    const res = await UserServices.getDetaisUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  return (
    <div>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? DefaultPageWeb : Fragment;
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;

