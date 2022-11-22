import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Left from "../pictures/Left.svg";
import Right from "../pictures/Right.svg";
import JobsListItem from "./JobListItem";
import "./pagination.css";

const JobsList = ({ jobs }) => {
  const [pageNumber, setPageNumber] = useState(1);

  if (!jobs) {
    return null;
  }
  const jobsPerPage = 5;
  const pagesVisited = pageNumber * jobsPerPage;

  const pageCount = Math.ceil(jobs.length / jobsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <div className=" flex justify-center bg-neutral-100  ">
        <ul className="  pt-[29px]  list-style: none">
          <JobsListItem
            jobs={jobs}
            jobsPerPage={jobsPerPage}
            pagesVisited={pagesVisited}
          />
        </ul>
      </div>
      <ReactPaginate
        previousLabel={<img src={Left} alt="previous" />}
        nextLabel={<img src={Right} alt="next" />}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
};
export default JobsList;
