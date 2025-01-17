import { GoGoal, GoPencil } from "react-icons/go";
import { Progress } from "@/components/ui/progress"; // Ensure this path is correct
import { Calendar, CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { HiOutlineBell } from "react-icons/hi2";
import { RiDeleteBin6Line } from "react-icons/ri";

const GoalsCard = ({ goal }) => {
  const {
    title = "Learn New Language",
    date = "12/22/2024",
    progress = 20,
    priority = "high",
    tasksCompleted = 0,
    totalTasks = 5,
    type = "Yearly",
    description = "The sun dipped below the horizon, painting the sky in hues of orange and pink.  the horizon, painting the sky in hues of orange and pink.  a harmonious melody of life continuing its timeless rhythm. The faint chirping of crickets signaled  sun dipped below   a harmonious melody of life continuing its timeless rhythm. The faint chirping of crickets signaled  sun dipped below the horizon, painting the sky in hues of orange and pink.  a harmonious melody of life continuing its timeless rhythm. The faint chirping of crickets signaled the start of an evening s the start of an evening symphony, a harmonious The sun dipped below the horizon, painting the sky in hues of orange and pink.  the horizon, painting the sky in hues of orange and pink.",
  } = goal || {};

  return (
    <Link to="/goals-view">
      <div className="bg-white shadow-md rounded-lg p-6 border text-gray-700 flex flex-col gap-5 hover:shadow-lg hover:border-l hover:border-spacing-1 hover:border-gray-800 transition-shadow duration-200">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <GoGoal className="text-gray-600 text-3xl" />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-semibold">{title}</h1>
                <span className="border border-black px-3 py-1 rounded-md text-xs capitalize mr-2">
                  {priority}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GoPencil className="text-[#000000] hover:text-blue-500 cursor-pointer text-lg" />
            <RiDeleteBin6Line className="text-[#000000] hover:text-red-500 cursor-pointer text-lg" />
          </div>
        </div>

        {/* Date */}
        <div className="ml-12">
          <p className="text-sm text-[#393939] flex items-center gap-1">
            <Calendar className="text-[#393939] h-4 w-4" />
            {date}
          </p>
        </div>

        {/* Task Status */}
        <div className="flex flex-col gap-2 ml-12">
          <div className="flex items-center bg-blue-200 rounded-md h-[25px] w-[60px] text-sm font-medium border text-gray-700 gap-0.5">
            <span className="flex gap-2 items-center m-1">
             <div className="flex flex-row items-center gap-2">
             <CircleCheck className="w-4 h-4 items-center mt-0.5 text-blue-600" />
              <p className="text-blue-600">
                {tasksCompleted}/{totalTasks}
              </p>{" "}
             </div>
              <HiOutlineBell className="m-2 w-[20px] h-[20px]" />
            </span>
          </div>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-sm text-sm text-center w-20">
            {type}
          </span>
        </div>

        {/* Description */}
        <div className="ml-12 mr-3">
          <p className="line-clamp-3 text-sm text-gray-600">{description}</p>
        </div>

        {/* Progress */}
        <div className="mt-2">
          <p className="text-sm text-gray-600 font-medium">Progress Status</p>
          <div className={`flex justify-between items-center text-lg font-semibold ${progress > 0 ? "text-[#4CAF50]" : "text-gray-800"}`}>
            <span className="text-3xl font-bold">{progress}%</span>
          </div>
          <Progress
            value={progress}
            className={`mt-2 h-3 rounded-md ${progress> 0 ? "bg-[#BEE6C0]" : "bg-[#D9D9D9]"}`}
          />
        </div>
      </div>
    </Link>
  );
};

export default GoalsCard;
