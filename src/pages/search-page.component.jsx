import { Component } from "react";
import CardList from "../components/card-list/card-list.component";
import LoadingSpinner from "../components/UI/LoadingSpinner";

class SearchPage extends Component {
  render() {
    return (
      <div className="container flex flex-row mx-auto mt-5 mb-20">
        <div className="basis-1/4 flex flex-col text-xl font-semibold">
          FILTER
        </div>
        <div className="">
          {this.props.loading ? (
            <LoadingSpinner></LoadingSpinner>
          ) : (
            <CardList items={this.props.items}></CardList>
          )}
        </div>
      </div>
    );
  }
}

export default SearchPage;
