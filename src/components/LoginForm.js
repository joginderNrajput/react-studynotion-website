import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const LoginForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success("Logged In");
    navigate("/dashboard");
  }

  const loginData = {
    ...formData,
  }
  console.log(loginData);



  return (
    <form
      className="flex flex-col w-full gap-y-4 mt-4"
      onSubmit={submitHandler}
    >
      <label className="w-full ml-1">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
          Email Address<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type="email"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter email id"
          name="email"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />
      </label>

      <label className="w-full relative ml-1">
        <p className="text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]">
          Password<sup className="text-pink-200">*</sup>
        </p>
        <input
          required
          type={showPassword ? "text" : "password"}
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter Password"
          name="password"
          className="bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px]"
        />

        <span
          className="absolute  top-[38px] right-3 cursor-pointer"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill="white" />
          ) : (
            <AiOutlineEye fontSize={24} fill="white" />
          )}
        </span>

        <Link to="#">
          <p className="text-xs mt-2 text-blue-100 max-w-max ml-auto">
            Forgot Password
          </p>
        </Link>
      </label>

      <button className="bg-yellow-50 rounded-[8px] font-medium w-full text-richblack-900 px-[12px] py-[8px] mt-5">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
