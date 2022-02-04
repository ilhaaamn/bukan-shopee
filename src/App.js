import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense, useEffect } from "react";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/search-page.component";
import { useDispatch } from "react-redux";
import { itemsActions } from "./store/item-slice";
import { searchShopItems } from "./store/items-action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useEffect App called");
    dispatch(searchShopItems("terlaris"));
  }, [dispatch]);

  return (
    <Suspense
      fallback={
        <div className="centered">
          <LoadingSpinner />
        </div>
      }
    >
      <Layout>
        <Routes>
          <Route path="/" exact element={<SearchPage></SearchPage>}></Route>
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
