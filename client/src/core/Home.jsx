import React, { useContext } from "react";
import { useState } from "react";
import Header from "../components/Header";
import VerticalHEader from "../components/VerticalHeader";
// import Footer from "../components/Footer";
import "../assets/css/Home.css";
import "../assets/css/Cards.css";
// import { userContext } from "../App";
import Student1 from "../assets/img/student1.jpg";
import Student2 from "../assets/img/student2.jpg";
import Student3 from "../assets/img/student3.jpg";
import Carousel from "react-material-ui-carousel";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Home = () => {
  document.title = "Home";

  const AboutHome = () => {
    const CompanyCards = () => {
      return (
        <section class="light">
          <div class="container py-2">
            <article class="postcard light blue">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://picsum.photos/1000/1000"
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title blue">
                  <a href="#">Amazon</a>
                </h1>
                <div class="postcard__subtitle small">
                  <p>Software Development Engineer</p>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
              </div>
            </article>
            <article class="postcard light red">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://picsum.photos/501/500"
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title red">
                  <a href="#">Adobe</a>
                </h1>
                <div class="postcard__subtitle small">
                  <p>Software Development Engineer</p>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
              </div>
            </article>
            <article class="postcard light green">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://picsum.photos/500/501"
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title green">
                  <a href="#">J.P. Morgan</a>
                </h1>
                <div class="postcard__subtitle small">
                  <p>Software Development Engineer</p>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
              </div>
            </article>
            <article class="postcard light yellow">
              <a class="postcard__img_link" href="#">
                <img
                  class="postcard__img"
                  src="https://picsum.photos/501/501"
                  alt="Image Title"
                />
              </a>
              <div class="postcard__text t-dark">
                <h1 class="postcard__title yellow">
                  <a href="#">Oracle</a>
                </h1>
                <div class="postcard__subtitle small">
                  <p>Software Development Engineer</p>
                </div>
                <div class="postcard__bar"></div>
                <div class="postcard__preview-txt">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi, fugiat asperiores inventore beatae accusamus odit
                  minima enim, commodi quia, doloribus eius! Ducimus nemo
                  accusantium maiores velit corrupti tempora reiciendis
                  molestiae repellat vero. Eveniet ipsam adipisci illo iusto
                  quibusdam, sunt neque nulla unde ipsum dolores nobis enim
                  quidem excepturi, illum quos!
                </div>
              </div>
            </article>
          </div>
        </section>
      );
    };

    const UserData = [
      {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
      },
      {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
      },
      {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555,
      },
      {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555,
      },
      {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234,
      },
    ];

    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });

    function BarChart({ chartData }) {
      return <Bar data={chartData} />;
    }

    function LineChart({ chartData }) {
      return <Line data={chartData} />;
    }

    const Graphs = () => {
      return (
        <div>
          <div className="py-5 vision-desc">
            <div className="d-flex">
              <div className="px-2" style={{ width: "50%" }}>
                <BarChart chartData={userData} />
              </div>
              <div className="px-2" style={{ width: "50%" }}>
                <LineChart chartData={userData} />
              </div>
            </div>
          </div>
          <div className="mission">
            <h3>Top Companies visiting College</h3>
            <CompanyCards />
          </div>
        </div>
      );
    };

    const CarouselPage = () => {
      return (
        <div>
          <div className="py-5 vision-desc">
            <div className="studentDetails">
              <Carousel
                autoPlay={true}
                animation="slide"
                indicators={false}
                navButtonsAlwaysVisible={true}
                cycleNavigation={true}
                navButtonsProps={{
                  style: {
                    background: "#ffffff",
                    color: "#494949",
                    borderRadius: "0",
                    margin: "0",
                  },
                }}
              >
                <img src={Student1} alt="" />
                <img src={Student3} alt="" />
                <img src={Student2} alt="" />
              </Carousel>
            </div>
          </div>
          <div className="mission">
            <h3>Placement Graphs</h3>
            <Graphs />
          </div>
        </div>
      );
    };

    return (
      <div className="page-wrapper">
        <div className="description">
          <div className="title-wrapper">
            <div className="title-desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi ducimus non molestias debitis fuga, recusandae est
                placeat rerum provident sapiente doloremque sequi dolor! Sint a
                nemo delectus qui eaque hic facilis temporibus iste
                exercitationem fuga, est eveniet? Tempore, fuga at!
              </p>
            </div>
          </div>
          <div className="body-title">
            <h3>Shining Stars of BIT 🙂</h3>
          </div>
          <CarouselPage />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <VerticalHEader />
      <AboutHome />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
