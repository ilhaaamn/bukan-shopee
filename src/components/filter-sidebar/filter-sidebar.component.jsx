import { Fragment, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import FilterCheckBox from "./filter-checkbox.component";

const FilterSideBar = (props) => {
  const { keyword } = props;
  const [filterData, setFilterData] = useState({});

  const getSearchFilters = async (keyword) => {
    console.log("getTrandingKeywords");
    const uri = `https://shopee.co.id/api/v4/search/search_filter_config?keyword=${encodeURIComponent(
      keyword
    )}&page_type=search`;
    console.log(uri);
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data.data.filter_configuration);
    setFilterData(data.data);
  };

  useEffect(() => {
    getSearchFilters(keyword);
  }, [keyword]);

  function dynamicCheckboxSwitch(filterGroup) {
    console.log("dynamicCheckboxSwitch");
    if (filterGroup.name === "LOCATIONS") {
      console.log(filterGroup.name);
      return (
        <FilterCheckBox
          checkBoxDatas={
            filterData.filter_configuration.dynamic_filter_group_data.locations
          }
        />
      );
    } else if (filterGroup.name === "FACET") {
      console.log(filterGroup.name);
      return (
        <FilterCheckBox
          checkBoxDatas={
            filterData.filter_configuration.dynamic_filter_group_data.facets
          }
        />
      );
    } else if (filterGroup.name === "BRANDS") {
      console.log(filterGroup.name);
      return (
        <FilterCheckBox
          checkBoxDatas={
            filterData.filter_configuration.dynamic_filter_group_data.brands
          }
        />
      );
    } else if (filterGroup.name === "SHIPPING_OPTIONS") {
      console.log(filterGroup.name);
      return (
        <FilterCheckBox
          checkBoxDatas={
            filterData.filter_configuration.dynamic_filter_group_data.shippings
          }
        />
      );
    } else {
      console.log("others: " + filterGroup.name);
      return (
        <FilterCheckBox
          checkBoxDatas={filterGroup.filters}
          filters={filterData.filter_configuration.filters}
        />
      );
    }
  }

  return (
    <div className="flex flex-col basis-1/6 pr-6">
      <div className="text-xl font-bold">FILTER</div>
      <div className="divide-y">
        {filterData &&
          filterData.filter_configuration &&
          filterData.filter_configuration.filter_groups.map(
            (filterGroup, index) => {
              return (
                <div>
                  <div
                    className="text-md font-semibold mt-3 mb-3"
                    key={filterGroup.name}
                  >
                    {
                      filterGroup.translations.find(
                        (items) => items.language_code === "id"
                      ).text
                    }
                  </div>
                  {dynamicCheckboxSwitch(filterGroup)}
                </div>
              );
            }
          )}
        <button className="w-full p-1 bg-blue-600 rounded-bl-sm rounded-br-sm">
          <NavLink to="#" className="flex-1 text-white text-sm p-2 text-center">
            HAPUS SEMUA
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default FilterSideBar;
