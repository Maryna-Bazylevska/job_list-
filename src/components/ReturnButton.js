import { useNavigate, useLocation } from "react-router-dom";
const ReturnButton = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <button
      type="button"
      onClick={() => navigate(location?.state?.from ?? "/")}
      className="hidden py-4 pl-[23px]  pr-[26px] rounded-lg bg-[#384564] text-[#3A4562]
  bg-opacity-[0.14]  mt-[97px]
  sm:flex sm:items-center text-center"
    >
      RETURN TO JOB BOARD
    </button>
  );
};
export default ReturnButton;
