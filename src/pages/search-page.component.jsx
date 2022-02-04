import { Component } from "react";
import { useSelector } from "react-redux";
import CardList from "../components/card-list/card-list.component";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const SearchPage = () => {
  const items = useSelector((state) => state.items);

  return (
    <div className="container flex flex-row mx-auto mt-5 mb-20">
      <div className="basis-1/4 flex flex-col ">
        <div className="text-xl font-bold mb-6">FILTER</div>
        <div className="text-md font-semibold">Metode Pembayaran</div>
        <label className="text-sm mt-2">
          <input
            type="checkbox"
            value={"COD (Bayar ditempat)"}
            name="COD (Bayar ditempat)"
            className="mr-2"
          />
          COD (Bayar ditempat)
        </label>
        <label className="text-sm mt-2">
          <input
            type="checkbox"
            value={"Cicilan"}
            name="Cicilan"
            className="mr-2"
          />
          Cicilan
        </label>
      </div>
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
