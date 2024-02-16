import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./SharedLayout.jsx/SharedLayout.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage/FavoritesPage.jsx"));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <SharedLayout/> }>
       <Route index element={ <HomePage/> }/>
       <Route path="/catalog" element={ <CatalogPage/> }/>
       <Route path="/favorite" element={ <FavoritesPage/> }/>
       <Route path="*" element={ <Navigate to="/"/> }/>
      </Route>
    </Routes>
  );
};
