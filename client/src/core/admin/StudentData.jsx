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
            <td>1BI20IS014</td>
            <td>Aniket Kumar Singh</td>
            <td>ISE</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const StudentData = () => {
  return (
    <div>
      <AdminHeader />
    </div>
  );
};

export default StudentData;
