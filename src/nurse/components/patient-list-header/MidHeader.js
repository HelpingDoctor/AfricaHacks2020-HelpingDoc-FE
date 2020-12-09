import React from "react";

function MidHeader() {
  return (
    <div className="patients-mid-header border-top border-bottom d-flex justify-content-between align-items-center py-2">
      <div className="left-2 d-flex align-items-center">
        <div className="left border-right align-self-center">
          {/* <AddPatient /> */}
        </div>
        <div className="right d-flex pl-3 text-center align-items-center">
          Sort by :
          <div class=" ml-2 p-0 d-flex align-self-center">
            <select id="inputState" class="form-control">
              <option selected>A - Z</option>
              <option>Recently added</option>
              <option>Last modified</option>
            </select>
          </div>
        </div>
      </div>
      <div className="right-2 d-flex">
        <>
          <button className="btn btn-outline-dark mr-4">
            <i class="fa fa-print" aria-hidden="true"></i>
          </button>
          <button class="btn btn-outline-dark my-2 my-sm-0 mr-4">
            <i class="fa fa-filter" aria-hidden="true"></i> Filter
          </button>
          <div className="sort-buttons">
            <button class="btn btn-outline-dark my-2 my-sm-0 mr-2">
              <i class="fa fa-list-alt" aria-hidden="true"></i>
            </button>
            <button class="btn btn-outline-dark my-2 my-sm-0">
              <i class="fa fa-th" aria-hidden="true"></i>
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default MidHeader;
