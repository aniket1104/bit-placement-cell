import React from "react";
import AdminHeader from "./AdminHeader";

const Admin = () => {
  const Table = () => {
    return (
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
            <td>1BI20IS014</td>
            <td>Aniket</td>
            <td>ISE</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>1BI20IS014</td>
            <td>Harsh</td>
            <td>ISE</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>1BI20IS016</td>
            <td>Shreya</td>
            <td>ISE</td>
          </tr>
        </tbody>
      </table>
    );
  };

  const SearchFilter = () => {
    return (
      <div>
        {/* <div className="d-flex justify-content-between">
          <div className="byBranch">Search by Branch</div>
          <div class="dropdown">
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
        </div> */}
        <Table />
      </div>
    );
  };

  return (
    <div>
      <AdminHeader />
      <SearchFilter />
    </div>
  );
};

export default Admin;
