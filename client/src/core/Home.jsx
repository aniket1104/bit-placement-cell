import React, { useContext } from "react";
import { useState } from "react";
import Header from "../components/Header";
import VerticalHEader from "../components/VerticalHeader";
import Footer from "../components/Footer";
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

  const Carding=()=>{
    return(
    
    //   <div class="card ">
    //   <div class="row ">
    //     <div class="col-3 p-5">
    //      <h1>26th</h1>
    //      <h5>November</h5>
    //      <h6>2022</h6>
    //     </div>
    //     <div  class="col-6 p-5">
    //       <h4>Company : AMAZON</h4>
    //       <h4>Job Role : Data Specialist</h4>
    //       <h4>CTC : 6000000</h4>
    //     </div>
    //     <div class="col-3 p-5">
    //     <div className="login">
          
    //         <button type="button" class="btn btn-dark login-btn center"  >
    //           Set Reminder
    //         </button>
          
    //     </div>
    //     </div>
    //   </div>
    // </div>

    <section class="pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <h3 class="mb-3">Carousel cards title </h3>
            </div>
            <div class="col-6 text-right">
                <a class="btn btn-primary mb-3 mr-1" href="#carouselExampleIndicators2" role="button" data-slide="prev">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <a class="btn btn-primary mb-3 " href="#carouselExampleIndicators2" role="button" data-slide="next">
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="col-12">
                <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">

                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row">

                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>

                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mb-3">
                                    <div class="card">
                                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"/>
                                        <div class="card-body">
                                            <h4 class="card-title">Special title treatment</h4>
                                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    );
  };
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
            <h3>Upcoming Companies</h3>
            <Carding/>
          </div>
<br/>
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
