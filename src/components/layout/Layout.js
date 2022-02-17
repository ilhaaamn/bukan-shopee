import { Fragment } from "react";
import NavBar from "./navbar/navbar-bar.component";

const Layout = (props) => {
  return (
    <Fragment>
      <NavBar />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
