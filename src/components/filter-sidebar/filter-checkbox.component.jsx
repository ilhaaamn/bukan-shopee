import { Fragment, useState } from "react";

const FilterCheckBox = (props) => {
  console.log("FilterCheckBox");
  console.log(props.filters);
  const filters = props.filters;
  const [isLoadMore, setIsLoadMore] = useState(false);
  const checkBoxDatas =
    props.checkBoxDatas && isLoadMore
      ? props.checkBoxDatas
      : props.checkBoxDatas.slice(0, 4);

  return (
    <Fragment>
      {props.checkBoxDatas &&
        checkBoxDatas.map((checkbox) => {
          return (
            <div className="flex flex-row items-center mb-2" key={checkbox}>
              <input
                type="checkbox"
                className="mr-2"
                id={checkbox.name}
                name={checkbox.name}
                value={checkbox.name}
                onChange={(e) => {
                  console.log(e.target.value);
                }}
              />
              <label htmlFor={checkbox.name} className="text-sm">
                {filters
                  ? filters
                      .find((filter) => filter.name === checkbox.name)
                      .translations.find(
                        (language) => language.language_code === "id"
                      ).text
                  : checkbox.display_name ||
                    checkbox.name ||
                    checkbox.category.name}
              </label>
            </div>
          );
        })}
      {!isLoadMore && props.checkBoxDatas.length > 4 && (
        // create button to load more location
        <button
          className="text-sm font-semibold mb-3"
          onClick={() => {
            setIsLoadMore(true);
          }}
        >
          Lainnya
        </button>
      )}
    </Fragment>
  );
};

export default FilterCheckBox;
