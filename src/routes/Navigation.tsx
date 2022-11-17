import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import { FormikBasicPage } from "../03-forms/pages/FormikBasicPage";
import RegisterPage from "../03-forms/pages/RegisterPage";
import logo from "../logo.svg";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/register" className={({isActive})=> isActive ? 'nav-active': ''}>Register Page</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={({isActive})=> isActive ? 'nav-active': ''} >Formik Basic</NavLink>
            </li>
            <li>
              <NavLink to="/users" className={({isActive})=> isActive ? 'nav-active': ''}>Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
            <Route path="formik-basic" element={<FormikBasicPage />} />
            <Route path="users" element={<h1>Users Page</h1>} />
            <Route path="register" element={<RegisterPage />} />

            {/* <Route path="/*" element={<Navigate to='' replace />} /> */}
        </Routes>




      </div>
    </BrowserRouter>
  );
};

export default Navigation;
