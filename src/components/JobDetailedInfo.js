import { nanoid } from "nanoid";
import Button from "./Button";
import Rectangle from "../pictures/Rectangle.svg";
import Shape from "../pictures/Shape.svg";
import ReturnButton from "./ReturnButton";
import CalculateDate from "../utilities/CalculateDate";
import ConvertedSalary from "../utilities/ConvertedSalary";
const JobDetailedInfo = ({
  id,
  name,
  email,
  phone,
  title,
  salary,
  address,
  benefits,
  location,
  pictures,
  createdAt,
  updatedAt,
  description,
  employment_type,
}) => {
  return (
    <div className=" flex justify-center   ">
      <div className=" pt-[26px] ">
        <div className=" flex  ">
          <div className=" items-center mb-[9px] mr-[328.5px]">
            <h2 className="text-[28px] text-[#3A4562] ">Job Details</h2>
          </div>
          <div className="flex items-center">
            <img
              src={Rectangle}
              alt="rectangle"
              className="w-[18px] h-[20px] b-[2px ] fill-[#70778B]"
            />
            <p className="mr-[31px] text-[#3A4562] text-lg">
              &nbsp; Save to my list
            </p>
            <img
              src={Shape}
              alt="shape"
              className="w-[18px] h-[20px] b-[2px ] fill-[#70778B]"
            />
            <p className="text-[#3A4562] text-lg">&nbsp; Share</p>
          </div>
        </div>
        <hr />
        <Button />
        <div className="flex justify-between">
          <p className=" text-2xl text-[#3A4562]">{name}</p>
          <div className="flex flex-col">
            <p className="text-xl text-[#3A4562]">
              € {ConvertedSalary(salary)}
            </p>
            <p className="text-sm text-[#3A4562]">Brotto,per year</p>
          </div>
        </div>
        <p className="text-sm text-zinc-300"> {CalculateDate(updatedAt)}</p>
        <p className="w-[721px] text-lg">{description}</p>
        <Button />
        <div>
          <h3 className="text-[28px] text-[#3A4562]">Additional info</h3>
          <hr />
          <p className="text-[18px] text-[#3A4562] mt-[28p5]">
            Employment type
          </p>
          <ul className="flex mb-[23px] mt-[10px]">
            {employment_type.map((data) => {
              return (
                <div
                  key={data}
                  className="w-[222px] h-[49px]  text-[#55699E] text-base bg-sky-100 flex items-center justify-center border-EmploymentBorder border-[1px] rounded-lg font-['ProximaNova-Bold'] text-EmploymentColor  leading-[34px] tracking-[-0.45px] mr-[8px] last:mr-0 bg-sky-100]"
                >
                  {data}
                </div>
              );
            })}
          </ul>
          <p className="text-[18px] text-[#3A4562]">Benefits</p>
          <ul className="flex mb-[87px] mt-[10px]">
            {benefits.map((data) => {
              return (
                <div
                  key={data}
                  className="w-[222px] h-[49px]  text-[#988B49] text-base bg-amber-100 flex items-center justify-center border-EmploymentBorder border-[1px] rounded-lg font-['ProximaNova-Bold'] text-EmploymentColor  leading-[34px] tracking-[-0.45px] mr-[8px] last:mr-0 bg-sky-100]"
                >
                  {data}
                </div>
              );
            })}
          </ul>
        </div>
        <div>
          <h3 className="text-[28px] text-[#3A4562]">Attached images</h3>
          <hr />
          <ul className="flex mb-[89px] mt-[10px]">
            {pictures.map((d) => {
              return (
                <div
                  key={nanoid(4)}
                  className="mr-[10px] last:mr-0 mb-[10px] last:mb-0"
                >
                  <img
                    src={`${d}?random=${Math.floor(Math.random() * 2352123)}`}
                    alt="pictures"
                    className="w-[200px] h-[116px]  shrink-0 object-cover rounded-lg;"
                  />
                </div>
              );
            })}
          </ul>
        </div>
        <ReturnButton />
      </div>
    </div>
  );
};
export default JobDetailedInfo;
