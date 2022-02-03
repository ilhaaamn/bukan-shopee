import logo from "./logo.svg";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Component, Suspense } from "react";
import CardList from "./components/card-list/card-list.component";
import NavBar from "./components/layout/navbar/navbar-bar.component";
import LoadingSpinner from "./components/UI/LoadingSpinner";
import Layout from "./components/layout/Layout";
import SearchPage from "./pages/search-page.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      items: [],
      trandingKeyword: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getTrandingKeywords();
    this.onSearch({ keyword: "terlaris" });
  }

  handleItemChange(items) {
    console.log(items);
    this.setState({
      items: items,
      loading: false,
    });
  }

  async onSearch(keyword) {
    console.log(keyword);
    this.setState({
      items: [],
      loading: true,
    });
    const uri =
      "https://shopee.co.id/api/v4/search/search_items?by=relevancy&keyword=" +
      encodeURIComponent(keyword.keyword) +
      "&limit=60&newest=0&order=desc&page_type=search&scenario=PAGE_GLOBAL_SEARCH&skip_autocorrect=1&version=2";
    console.log(uri);
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data);
    this.handleItemChange(data.items);
  }

  async getTrandingKeywords() {
    console.log("keywords");
    const uri =
      "https://shopee.co.id/api/v4/search/trending_search?bundle=popsearch&limit=8&offset=0";
    console.log(uri);
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data.data.querys);
    this.setState({
      trandingKeyword: data.data.querys,
    });
  }

  render() {
    return (
      <Suspense
        fallback={
          <div className="centered">
            <LoadingSpinner />
          </div>
        }
      >
        <Layout
          onSearch={this.onSearch.bind(this)}
          trandingKeyword={this.state.trandingKeyword}
        >
          <Routes>
            <Route
              path="/"
              exact
              element={
                <SearchPage
                  loading={this.state.loading}
                  items={this.state.items}
                ></SearchPage>
              }
            ></Route>
          </Routes>
        </Layout>
      </Suspense>
    );
  }
}

export default App;
