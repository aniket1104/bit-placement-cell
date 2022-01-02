import React, { useState } from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import "../assets/css/Alumni.css";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Alumni = () => {
  const AlumniFeedback = () => {
    const Review = {
      id: 1,
      name: "Susan Smith",
      branch: "Computer Science and Engineering - 2020",
      job: "One Direct - Full Stack Developer",
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text: "When you are passionate about what you do, you would have reached halfway towards the goal. I always tried to enhance my skills by participating in technical events conducted in and out of the college. I concentrated on academics and also practiced coding on competitive coding platforms. Placement Center gave me the opportunity to enhance my skills and I was placed in OneDirect as Full Stack Developer with a package of Rs: 20.LPA. I express my profound gratitude for my teachers of BIT for helping me in achieving my goals.",
    };

    return (
      <div className="wrap-feedback">
        <article className="review">
          <div className="desc-container">
            <h3 className="author">{Review.name}</h3>
            <h3 className="branch">{Review.branch}</h3>
            <h3 className="job">{Review.job}</h3>
            <p className="info">{Review.text}</p>
          </div>
          <div className="img-container">
            <img src={Review.image} alt={Review.name} className="person-img" />
          </div>
        </article>
        <article className="review">
          <div className="desc-container">
            <h3 className="author">{Review.name}</h3>
            <h3 className="branch">{Review.branch}</h3>
            <h3 className="job">{Review.job}</h3>
            <p className="info">{Review.text}</p>
          </div>
          <div className="img-container">
            <img src={Review.image} alt={Review.name} className="person-img" />
          </div>
        </article>
      </div>
    );
  };

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
          <AlumniFeedback />
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