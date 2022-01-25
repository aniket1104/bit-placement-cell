import React,{useContext} from "react";
import Header from "../components/Header";
import VerticalHEader from "../components/VerticalHeader";
// import Footer from "../components/Footer";
import "../assets/css/Home.css";
import { userContext } from "../App";

const Home = () => {
  return (
    <div>
      <Header />
      <VerticalHEader />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
