import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const NavBar = (props) => {
  const navigate = useNavigate();
  const textInputRef = useRef(null);
  const location = useLocation();
  const search = new URLSearchParams(location.search);
  const keyword = search.get("keyword");

  const [trandingKeyword, setTrandingKeyword] = useState([]);

  useEffect(() => {
    textInputRef.current.value = keyword;
    getTrandingKeywords();
  }, [keyword]);

  const getTrandingKeywords = async () => {
    console.log("getTrandingKeywords");
    const uri =
      "https://shopee.co.id/api/v4/search/trending_search?bundle=popsearch&limit=8&offset=0";
    console.log(uri);
    const response = await fetch(uri);
    const data = await response.json();
    console.log(data.data.querys);
    setTrandingKeyword(data.data.querys);
  };

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredText = textInputRef.current.value;
    console.log(enteredText);
    navigate({
      pathname: "/search",
      search: `keyword=${enteredText}`,
    });
  }

  return (
    <nav className="justify-center flex bg-gradient-to-b from-blue-500 to-blue-400 p-5">
      <div className="container flex">
        <div className="flex justify-start items-center text-white">
          <span className="font-bold text-8xl mr-4 tracking-tigh">E</span>
          <span className="font-semibold text-3xl tracking-tigh">
            Bukan Ecommerce
          </span>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="grow block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm text-left lg:flex-grow ml-10 mr-10">
            <form className="flex" onSubmit={submitFormHandler}>
              <input
                className="grow w-full lg:w-auto px-4 py-2 text-base leading-6 font-medium text-gray-900 rounded-l-sm bg-white border-gray-300 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-gray-600 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                placeholder="Cari produk disini"
                ref={textInputRef}
              />
              <span className="flex items-center p-1 bg-white rounded-r-sm">
                <button
                  type="submit"
                  className="p-1 focus:outline-none focus:shadow-outline w-20 flex justify-center bg-blue-600 text-white rounded-sm"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </button>
              </span>
            </form>
            <div className="flex">
              {trandingKeyword &&
                trandingKeyword.map((keyword, index) => {
                  return (
                    <NavLink
                      to={{
                        pathname: "/search",
                        search: `keyword=${keyword.text}`,
                      }}
                      className="mr-4 text-white text-xs mt-2 tracking-tigh"
                      key={index}
                    >
                      {keyword.text}
                    </NavLink>
                  );
                })}
            </div>
          </div>
          <div>
            <a href="#" role="button" className="relative flex">
              <svg
                className="w-8 h-8 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
              </svg>
              {
                // <span className="absolute right-0 top-0 rounded-full bg-white w-4 h-4 top right p-0 m-0 text-orange-600 border-white font-mono text-sm  leading-tight text-center">
                //   5
                // </span>
              }
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
