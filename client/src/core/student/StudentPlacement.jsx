import React from "react";
import "../../assets/css/student.css";
import StudentHeader from "./StudentHeader";

const StudentPlacement = () => {
  return (
    <>
      <StudentHeader />
      <div className="container-fluid" id="student-body">
        <div className="row">
          <div className="col-xl-3">
            <div className="container  mt-4 mb-4 p-3 d-flex justify-content-center">
              <div className="card p-4 blackpro" id="profilecrd">
                <div
                  className=" image d-flex flex-column justify-content-center align-items-center"
                  id="imgprof"
                >
                  {" "}
                  <button className="btn btn-secondary" id="btnprofile">
                    {" "}
                    <img
                      id="profimage"
                      src="https://i.imgur.com/wvxPV9S.png"
                      height="100"
                      width="100"
                    />
                  </button>{" "}
                  <span className="name mt-3">
                    <span></span> <span></span>
                  </span>{" "}
                  <span className="idd"></span>
                  {/* <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div> */}
                  <div className=" d-flex mt-2">
                    {" "}
                    {/* <button
                      className="btn1 btn-light grow"
                      // onClick={() => {
                      //   navigate(`/update`);
                      // }}
                    >
                      Edit Profile
                    </button>{" "} */}
                  </div>
                  <div className="text mt-3">
                    {" "}
                    <span id="spanpro">
                      Eleanor Pena is a creator of minimalistic x bold graphics
                      and digital artwork.
                      <br />
                      <br /> Artist/ Creative Director by Day #NFT minting@ with
                      FND night.{" "}
                    </span>{" "}
                  </div>
                  <div className="gap-5 mt-3 icons d-flex flex-row justify-content-center align-items-center ">
                    <span className="lightic grow">
                      <a href="#">
                        <i className="fa fa-github fa-3x lightic"></i>
                      </a>
                    </span>
                    <span className="lightic grow">
                      <a href="#">
                        <i className="fa fa-linkedin fa-3x lightic"></i>
                      </a>
                    </span>
                    {/* <span className="lightic grow"><a href="https://twitter.com"><i className="fa fa-twitter fa-5x lightic"></i></a></span> */}
                    <span className="lightic grow">
                      <a href="#">
                        <i className="fa fa-instagram fa-3x lightic"></i>
                      </a>
                    </span>
                    <span className="lightic grow">
                      <a href="#">
                        <i className="fa fa-file fa-3x lightic"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-9">
            <div className="col-12" id="det">
              <div className="card ml-4" id="card1">
                <div className="card-header blackpro">
                  <h1 className="fw-normal">My Placement</h1>
                </div>
              </div>
            </div>

            <div className="col-12 mt-3">
              <div className="container  mt-1 mb-1">
                <div className="row">
                  <div className="col-md-4 mt-3">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          Company Name <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">
                            {" "}
                            <span className="text1"> </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-3">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          Profile
                          <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">
                            {" "}
                            <span className="text1"> </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4 mt-3">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          CTC / Stipend <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">
                            {" "}
                            <span className="text1"> </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-3 mb-3">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          Message from Placement Team <br />
                        </h3>
                        <div className="mt-1 ">
                          <div className="mt-3">
                            {" "}
                            <span className="text1"> </span>{" "}
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
      </div>
    </>
  );
};

export default StudentPlacement;
