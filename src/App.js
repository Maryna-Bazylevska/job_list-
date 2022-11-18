import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useEffect, useState } from "react";
import getJobs from "./services/jobs-api";
import JobsList from "./components/JobsList";
import JobDetailed from "./components/JobDetailed ";
function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    getJobs()
      .then((data) => {
        setJobs(data);
      })

      .catch((error) => console.warn(error));
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<JobsList jobs={jobs} />} />
          <Route path="/:id" element={<JobDetailed jobs={jobs} />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
