import { Navigate, Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout.jsx/SharedLayout.jsx";

import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage.jsx";
import ModalCarCard from "./pages/modal/ModalCarCard.jsx";

import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={ <SharedLayout/> }>
       <Route index element={ <HomePage/> }/>
       <Route path="/catalog" element={ <CatalogPage/> }/>
       <Route path="/favorite" element={ <FavoritesPage/> }/>
       <Route path="*" element={ <Navigate to="/"/> }/>
      </Route>
    </Routes>
    <ModalCarCard />
    <ToastContainer
        position="bottom-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export { App };

