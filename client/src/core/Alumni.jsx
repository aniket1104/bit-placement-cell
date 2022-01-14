import React, { useState } from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import "../assets/css/Alumni.css";
import { Link } from "react-router-dom";
// import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Alumni = () => {
  // const AlumniFeedback = () => {
  //   const Review = {
  //     id: 1,
  //     name: "susan smith",
  //     job: "web developer",
  //     image:
  //       "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
  //     text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  //   };

  //   return (
  //     <article className="review">
  //       <div className="img-container">
  //         <img src={Review.image} alt={Review.name} className="person-img" />
  //         <span className="quote-icon">
  //           <FaQuoteRight />
  //         </span>
  //       </div>
  //       <h4 className="author">{Review.name}</h4>
  //       <p className="job">{Review.job}</p>
  //       <p className="info">{Review.text}</p>
  //       <div className="button-container">
  //         <button className="prev-btn">
  //           <FaChevronLeft />
  //         </button>
  //         <button className="next-btn">
  //           <FaChevronRight />
  //         </button>
  //       </div>
  //       <button className="random-btn">Surprise Me</button>
  //     </article>
  //   );
  // };

  const AlumniInfo = () => {
    return (
      <div>
        <div className="title-wrapper">
          <div className="title-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              earum harum nam sapiente quis rem nihil in cupiditate iusto omnis
              sed qui repellat, temporibus soluta repudiandae facilis magnam
              esse, veniam aliquid accusamus aperiam? Necessitatibus repellat,
              laborum error, labore autem officia quis quo vel eligendi eum
              illum numquam eaque est qui!
            </p>
          </div>
        </div>
        <div className="feedback">
          <h3>Alumni Feedback</h3>
          {/* <AlumniFeedback /> */}
        </div>
      </div>
    );
  };

  const AlumniDsc = () => {
    return (
      <div className="alumni">
        <div className="alumni-header">
          <div className="alumni-header-wrapper position-absolute top-50 start-0 translate-middle">
            <h3>Alumni</h3>
          </div>
        </div>
        <div className="description">
          <div className="navigation-link d-flex">
            <Link to="/">
              <a className="nav-link home" aria-current="page" href="#">
                Home
              </a>
            </Link>
            <div className="current-link">/ Alumni</div>
          </div>
          <AlumniInfo />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <AlumniDsc />
    </div>
  );
};

export default Alumni;
