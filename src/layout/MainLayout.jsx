import React from "react";
import Header from "../comman/Header";

import Footer from "../comman/Footer";

export default function MainLayout(props) {
  return (
    <>
      <div className="main">
        <div className="main__content">
          <Header />
          {props.children}
          <Footer />
        </div>
      </div>
    </>
  );
}
