import React, { useState } from "react";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import VerticalHeader from "../components/VerticalHeader";
import NavigationLink from "../components/NavigationLink";
import "../assets/css/Alumni.css";
import { Link } from "react-router-dom";

const Alumni = () => {
  document.title = "Alumni";

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
        <div className="body-title">
          <h3>Alumni Feedback</h3>
          <AlumniFeedback /> 
        </div>
      </div>
    );
  };

  const AlumniDsc = () => {
    return (
      <div className="d-flex">
        <VerticalHeader />
        <div className="page-wrapper">
          <div className="description">
            <NavigationLink />
            <AlumniInfo />
          </div>
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
