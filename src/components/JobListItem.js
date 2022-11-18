import { Link } from "react-router-dom";
import Star from "../pictures/Star.svg";
import Location from "../pictures/Location.svg";
import Rectangle from "../pictures/Rectangle.svg";
import CalculateDate from "../utilities/CalculateDate";
const JobItem = ({ jobs, pagesVisited, jobsPerPage }) => {
  return jobs.slice(pagesVisited, pagesVisited + jobsPerPage).map((job) => (
    <li key={job.id}>
      <div className=" w-[1100px] flex  justify-between flex-col bg-white  py-[24px] rounded-xl lg:flex-row lg:my-6">
        <div className="flex flex-row pt-[24px]">
          <div className="pl-[16px] mr-[26px]">
            <img
              className=" h-14 w-14  rounded-full  "
              src={job.pictures[2]}
              alt={job.name}
            />
          </div>
          <div>
            <Link to={`/${job.id}`} className="cursor-pointer flex">
              <p>{job.title}</p>
            </Link>
            <p className="font-normal text-gray-400 text-base py-[8px]">
              Departament name • {job.name}
            </p>
            <div className="flex">
              <img
                src={Location}
                alt="location"
                className="w-[16px] h-[20px] b-[2px ] fill-[#70778B]"
              />

              <p className="font-normal text-gray-400 text-base">
                &nbsp; &nbsp; {job.address}
              </p>
            </div>
          </div>
        </div>
        <div className="flex  flex-row ">
          <div className="flex items-center  ">
            <img src={Star} className=" " alt="stars" />
            <img src={Star} className=" " alt="stars" />
            <img src={Star} className=" " alt="stars" />
            <img src={Star} className=" " alt="stars" />
            <img src={Star} className=" " alt="stars" />
          </div>

          <div className="flex flex-col justify-between items-end pr-[24px] ml-[26px]">
            <img
              src={Rectangle}
              alt="rectangle"
              className="w-[16px] h-[20px] b-[2px ] fill-[#70778B]"
            />
            <p className="font-normal text-[#878D9D]">
              {CalculateDate(job.updatedAt)}
            </p>
          </div>
        </div>
      </div>
    </li>
  ));
};

export default JobItem;
