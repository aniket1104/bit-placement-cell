import React from "react";
import AdminHeader from "./AdminHeader";

const StudentData = () => {
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

  const SearchByBranch = () => {
    return (
      <div className="container">
        <div className="container-fluid d-flex justify-content-center py-5">
          <div className="byBranch px-5">
            <h3 className="py-1 fw-normal">Search by Branch</h3>
          </div>
          <div class="dropdown px-5">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Branch
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  CSE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ISE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ECE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ETE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  EEE
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  CIV
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  MEC
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <AdminHeader />
      <SearchByBranch />
      <Table />
    </div>
  );
};

export default StudentData;
