import React from "react";
import AdminHeader from "./AdminHeader";

const Table = () => {
  return (
    <div style={{ paddingTop: "20px" }}>
      <table class="table">
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
            <td>Aniket Kumar Singh</td>
            <td>ISE</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Search = () => {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="position-absolute top-50 start-50 translate-middle">
          <h3
            className="d-flex justify-content-center"
            style={{ fontSize: "3.4rem" }}
          >
            Search
          </h3>
          <div className="d-flex">
            <input
              type="text"
              className="form-control rounded-0"
              style={{ width: "500px" }}
            />
            <button
              className="btn btn-outline-dark rounded-0"
              style={{ boxShadow: "none" }}
            >
              <i class="far fa-search fs-2"></i>
            </button>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

const SearchStudent = () => {
  return (
    <div>
      <AdminHeader />
      <Search />
    </div>
  );
};

export default SearchStudent;
