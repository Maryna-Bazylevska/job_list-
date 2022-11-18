import { useParams } from "react-router-dom";
import JobDetailedInfo from "./JobDetailedInfo";
const JobDetailed = ({ jobs }) => {
  const { id } = useParams();
  console.log("id", id);
  const filteredJobs = jobs.filter((job) => job.id === id);
  return filteredJobs.map((job) => <JobDetailedInfo key={job.id} {...job} />);
};
export default JobDetailed;
