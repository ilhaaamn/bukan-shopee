import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CardList from "../components/card-list/card-list.component";
import FilterSideBar from "../components/filter-sidebar/filter-sidebar.component";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { searchShopItems } from "../store/items-action";

const SearchPage = () => {
  const items = useSelector((state) => state.items);
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const keyword = search.get("keyword");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchShopItems(keyword));
  }, [dispatch, keyword]);

  return (
    <div className="container flex flex-row mx-auto mt-5 mb-20">
      <FilterSideBar keyword={keyword} />
      <div className="basis-full self-center">
        {items.loading ? (
          <LoadingSpinner></LoadingSpinner>
        ) : (
          <CardList items={items.items}></CardList>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
