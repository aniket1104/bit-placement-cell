import React from "react";
import AdminHeader from "./AdminHeader";

const SearchStudent = () => {
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
          <div className="container-fluid d-flex justify-content-center py-5">
            {/* <div>
              <h3
                className="d-flex justify-content-center"
                style={{ fontSize: "3.4rem" }}
              >
                Search
              </h3>
            </div> */}
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
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <AdminHeader />
      <Search />
      <Table />
    </div>
  );
};

export default SearchStudent;
