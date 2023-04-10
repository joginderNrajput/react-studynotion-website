import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [accountType, setaccountType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData,
    };
    console.log("printing Account Data");
    console.log(accountData);
    const finalData = {
        ...accountData, accountType
    }
    console.log("printing account data ");
    console.log(finalData);

    navigate("/dashboard");
  }

  return (
    <div className="flex flex-col w-full gap-y-4 mt-4   ">
      {/* student-Instructor tab */}
      <div className="flex bg-slate-800 p-1 gap-x-1 my-6 rounded-full max-w-max">
        <button
          onClick={() => setaccountType("student")}
          className={`${accountType === "student" 
          ? "bg-richblack-900 text-white shadow-sm shadow-white "
          :
          "bg-transparent text-richblack-100"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Student
        </button>
        <button
          onClick={() => setaccountType("instructor")}
          className={`${accountType === "instructor" 
          ? "bg-richblack-900 text-white shadow-sm shadow-white "
          :
          "bg-transparent text-richblack-100"
          } py-2 px-5 rounded-full transition-all duration-200`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler}>
        {/* first name and lastName */}
        <div className="flex gap-9 mb-4">
          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375]">
              First name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] ml-1"
            />
          </label>

          <label>
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375]">
              Last name<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>
        {/* email Add */}
        <div className="mb-4 ml-1">
          <label className="">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375]">
              Email Address<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type="email"
              name="email"
              onChange={changeHandler}
              placeholder="Enter Email Address "
              value={formData.email}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
          </label>
        </div>

        {/* createPassword and Confirm Password */}
        <div className="flex justify-between items-center ml-1">
          <label className="relative">
            <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375]">
              Create Password<sup className="text-pink-200">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
              className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
            />
            <span
              className="absolute  top-[45px] right-3 cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="white" />
              ) : (
                <AiOutlineEye fontSize={24} fill="white" />
              )}
            </span>
          </label>

          <div className="">
            <label className="relative">
              <p className="text-[0.875rem] text-richblack-5 mb-3 leading-[1.375]">
                Confirm Password<sup className="text-pink-200">*</sup>
              </p>
              <input
                required
                type={showPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={changeHandler}
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
              />
              <span
                className="absolute  top-[45px] right-3 cursor-pointer"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="white" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="white" />
                )}
              </span>
            </label>
          </div>
        </div>
        <button className="bg-yellow-50 rounded-[8px] font-medium w-full text-richblack-900 px-[12px] py-[8px] mt-5 shadow-sm shadow-blue-200">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
