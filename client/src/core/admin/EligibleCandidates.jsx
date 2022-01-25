import React from "react";
import AdminHeader from "./AdminHeader";

const EligibleCandidates = () => {
  const Table = () => {
    return (
      <div className="container-fluid d-flex justify-content-center py-5">
        <table class="table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">USN</th>
              <th scope="col">NAME</th>
              <th scope="col">BRANCH</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="#">1BI20IS014</a>
              </td>
              <td>Aniket</td>
              <td>ISE</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="#">1BI20IS013</a>
              </td>
              <td>Arpita</td>
              <td>ECE</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="#">1BI20IS017</a>
              </td>
              <td>Jhanvi</td>
              <td>ISE</td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>
                <a href="#">1BI20IS015</a>
              </td>
              <td>3rd Year wali Senior</td>
              <td>ISE</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const EligibleCandidates = () => {
    return (
      <div className="container">
        <div className="container-fluid">
          <div className="container-fluid py-3">
            <h4>Eligibility Criteria</h4>
            <div className="criteria d-flex">
              <div className="input-group mb-3">
                <span class="input-group-text">10th Percentage or Marks</span>
                <input type="text" />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">12th Percentage or Marks</span>
                <input type="text" />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">UG/PG Percentage or Marks</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="container-fluid ">
            <div className="criteria d-flex">
              <div className="input-group mb-3">
                <span class="input-group-text">Number of Backs</span>
                <input type="text" />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">Education Gap</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="container-fluid py-3">
            <h4>Company Details</h4>
            <div className="criteria d-flex">
              <div className="input-group mb-3">
                <span class="input-group-text">Company Name</span>
                <input type="text" />
              </div>
              <div className="input-group mb-3">
                <span class="input-group-text">CTC Offered</span>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-outline-dark rounded-0">
              Submit
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <AdminHeader />
      <EligibleCandidates />
      <Table />
    </div>
  );
};

export default EligibleCandidates;
