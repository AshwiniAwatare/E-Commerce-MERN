import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import SignUp from "./components/SignUp/SignUp";
import ProductDetails from "./components/ProductDetails/ProductDetails"

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="/" element={<Products/>}></Route>
      <Route index={true} path="/products" element={<Products/>}></Route>
      <Route path="/product/:id" element={<ProductDetails/>}></Route>

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signUp" element={<SignUp/>}></Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
