import React, { useEffect, useState } from "react";

import { fetchCategories } from "./scripts/fetch";

import ContainerBox from "./pages/Container/ContainerBox";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";

import "./App.less";

const App = () => {
  const [chuckCategories, setChuckCategories] = useState([]);

  useEffect(() => {
    fetchCategories((data) => setChuckCategories(data));
  }, []);

  return (
    <>
      <div className="App">
        <Header />
        <ContainerBox chuckCategories={chuckCategories} />
        <Footer />
      </div>
    </>
  );
};

export default App;
