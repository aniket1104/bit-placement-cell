import React from 'react'
import "../assets/css/student.css";
const Student = () => {
    return (
        <>

        {/* <div>sjhsjdskjds</div> */}
        <div className ="mbody">
        <div className="container bootstrap snippets bootdey">
<div className="row">
  <div className="profile-nav col-md-3">
      <div className="panel">
          <div className="user-heading round">
              <a href="#">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt=""/>
              </a>
              <h1>Camila Smith</h1>
              <p>deydey@theEmail.com</p>
          </div>

          <ul className="nav nav-pills nav-stacked">
              {/* <li className="active"><a href="#"> <i className="fa fa-user"></i> Profile</a></li> */}
              {/* <li><a href="#"> <i className="fa fa-calendar"></i> Recent Activity <span className="label  pull-right r-activity">9</span></a></li> */}
              <li><a href="#"> <i className="fab fa-instagram fa-2x"></i> </a></li>
              <li><a href="#"> <i className="fab fa-twitter fa-2x"></i> </a></li>
              <li><a href="#"> <i className="fab fa-linkedin fa-2x"></i> </a></li>
              <li><a href="#"> <i className="fab fa-github fa-2x"></i> </a></li>
              <li><a href="#"> <i className="far fa-file-pdf fa-2x"></i> </a></li>
          </ul>
        
      </div>
  </div>
  <div className="profile-info col-md-9">
      {/* <div className="panel">
          <form>
              <textarea placeholder="Whats in your mind today?" rows="2" className="form-control input-lg p-text-area"></textarea>
          </form>
          <footer className="panel-footer">
              <button className="btn btn-warning pull-right">Post</button>
              <ul className="nav nav-pills">
                  <li>
                      <a href="#"><i className="fa fa-map-marker"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fa fa-camera"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className=" fa fa-film"></i></a>
                  </li>
                  <li>
                      <a href="#"><i className="fa fa-microphone"></i></a>
                  </li>
              </ul>
          </footer>
      </div> */}
      <div className="panel">
          <div className="bio-graph-heading">
              Aliquam ac magna metus. Nam sed arcu non tellus fringilla fringilla ut vel ispum. Aliquam ac magna metus.
          </div>
          <div className="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div className="row">
                  <div className="bio-row">
                      <p><span>First Name </span>: Camila</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Last Name </span>: Smith</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Country </span>: Australia</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Birthday</span>: 13 July 1983</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Occupation </span>: UI Designer</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Email </span>: jsmith@flatlab.com</p>
                  </div>
                  <div className="bio-row">
                      <p><span>Mobile </span>: (12) 03 4567890</p>
                  </div>
                  <div className="bio-row">
                      <p><span>className 10 marks </span>: 10cgpa</p>
                  </div>
                  <div className="bio-row">
                      <p><span>className 12 marks </span>: 88.88</p>
                  </div>
                  <div className="bio-row">
                      <p><span>current cgpa </span>: 10cgpa</p>
                  </div>
                  <div className="bio-row">
                      <p><span>className 10 marks </span>: 10cgpa</p>
                  </div>
                  
                 
              </div>
          </div>
      </div>
      <div>
          <div className="row">
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          <div className="bio-chart">
                              {/* <div style="display:inline;width:100px;height:100px;">
                              <input className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="35" data-fgcolor="#e06b7d" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(224, 107, 125); padding: 0px; -webkit-appearance: none; background: none;"/>
                              </div> */}
                             

                          </div>
                          <div className="bio-desk">
                              <h4 className="black font-weight-bold">Extra-Curricular activities</h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          <div className="bio-chart">
                              {/* <div style="display:inline;width:100px;height:100px;"><canvas width="100" height="100px"></canvas><input className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="63" data-fgcolor="#4CC5CD" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(76, 197, 205); padding: 0px; -webkit-appearance: none; background: none;"/></div> */}
                          </div>
                          <div className="bio-desk">
                              <h4 className="black font-weight-bold"> Clubs involved </h4>
                              <p>Started : 15 July</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          <div className="bio-chart">
                              {/* <div style="display:inline;width:100px;height:100px;"><canvas width="100" height="100px"></canvas><input className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="75" data-fgcolor="#96be4b" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(150, 190, 75); padding: 0px; -webkit-appearance: none; background: none;"/></div> */}
                          </div>
                          <div className="bio-desk">
                              <h4 className="black font-weight-bold">Certifications</h4>
                              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet labore ex voluptates corporis esse eos dignissimos molestiae fuga itaque porro quos quasi blanditiis, quod nisi magni totam maxime! Odio, incidunt.</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          {/* <div className="bio-chart">
                              <div style="display:inline;width:100px;height:100px;"><canvas width="100" height="100px"></canvas><input className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="50" data-fgcolor="#cba4db" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(203, 164, 219); padding: 0px; -webkit-appearance: none; background: none;"/></div>
                          </div> */}
                          <div className="bio-desk">
                              <h4 className="black font-weight-bold">Projects and Internships</h4>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam non in et, deleniti voluptates temporibus provident nostrum assumenda magnam, corrupti obcaecati, laudantium eius nobis natus doloribus qui omnis quos repellat!</p>
                              <p>Deadline : 15 August</p>
                          </div>
                      </div>
                  </div>
              </div>



              <div className="col-md-6">
                  <div className="panel">
                      <div className="panel-body">
                          {/* <div className="bio-chart">
                              <div style="display:inline;width:100px;height:100px;"><canvas width="100" height="100px"></canvas><input className="knob" data-width="100" data-height="100" data-displayprevious="true" data-thickness=".2" value="50" data-fgcolor="#cba4db" data-bgcolor="#e8e8e8" style="width: 54px; height: 33px; position: absolute; vertical-align: middle; margin-top: 33px; margin-left: -77px; border: 0px; font-weight: bold; font-style: normal; font-variant: normal; font-stretch: normal; font-size: 20px; line-height: normal; font-family: Arial; text-align: center; color: rgb(203, 164, 219); padding: 0px; -webkit-appearance: none; background: none;"/></div>
                          </div> */}
                          <div className="bio-desk">
                              <h4 className="black font-weight-bold">Adobe Muse Template</h4>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam non in et, deleniti voluptates temporibus provident nostrum assumenda magnam, corrupti obcaecati, laudantium eius nobis natus doloribus qui omnis quos repellat!</p>
                              <p>Deadline : 15 August</p>
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
    )
}

export default Student
