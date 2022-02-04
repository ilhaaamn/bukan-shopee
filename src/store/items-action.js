import { itemsActions } from "./item-slice";

export const searchShopItems = (keyword) => async (dispatch) => {
  const onSearch = async (keyword) => {
    dispatch(itemsActions.handleItemLoading());
    console.log(keyword);
    const uri =
      "https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=" +
      encodeURIComponent(keyword) +
      "&limit=60&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&skip_autocorrect=1&version=2";
    console.log(uri);
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
    return data.items;
  };

  try {
    const items = await onSearch(keyword);
    dispatch(itemsActions.handleItemChange(items));
  } catch (error) {
    console.log(error);
  }
};
