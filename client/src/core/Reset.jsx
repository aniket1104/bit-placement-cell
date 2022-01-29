import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
//import '../App.css';

const url = "http://localhost:8000";
const Reset = () => {
  const [USN, setUSN] = useState("");
  const navigate = useNavigate();

  const PostData = async () => {
    console.log(USN);
    try {
      let res = await axios({
        method: "post",
        url: `${url}/resets`,
        headers: {
          "Content-type": "application/json",
        },
        data: { USN: USN },
      });
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log("error while getting data", error);
    }
  };

  return (
    <div>
      <Header />
       <div className="container">
        <div className="container-fluid">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h3
              className="d-flex justify-content-center fw-normal"
              style={{ fontSize: "3rem" }}
            >
              Reset the Password
            </h3>
            <div>
              <input
                placeholder="USN"
                name="USN"
                value={USN}
                className="form-control rounded-0 my-3"
                style={{ width: "450px" }}
                onInput={(e)=>{setUSN(e.target.value)}}
              ></input>
              </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-dark rounded-0"
                onClick={() => PostData()}
              >
                Send
              </button>
            </div>
           
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Reset;
