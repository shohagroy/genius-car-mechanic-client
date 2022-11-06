import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { AuthProvaider } from "../../GobalContext/GobalContext";

const SignUp = () => {
  const { createUserWithEmail, userProfileUpdate } = useContext(AuthProvaider);

  const location = useLocation();
  const navigate = useNavigate();

  const path = location.state?.path?.pathname || "/";

  const createuserHandelar = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    createUserWithEmail(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        if (user) {
          userProfileUpdate(name);
          navigate(path, { relative: true });
        }

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error((err) => err);
        // ..
      });
  };

  return (
    <div className="max-w-[1140px] mx-auto h-[900px]">
      <div className="flex justify-between items-center">
        <div>
          <img className="h-[500px] w-[460px]" src={img} alt="Login Image" />
        </div>
        <div className=" w-[600px] border rounded-xl">
          <h2 className="mt-[50px] text-center text-[40px] font-semibold text-[#444444]">
            Sign Up
          </h2>

          <form onSubmit={createuserHandelar} className="px-[75px] mt-[50px]">
            <label className=" text-[18px] font-semibold block">Name</label>
            <input
              className=" border p-[15px] mt-[20px] rounded-xl w-full"
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <label className="text-[18px] font-semibold block mt-[35px]">
              Email
            </label>
            <input
              className="border p-[15px] mt-[20px] rounded-xl w-full"
              type="email"
              name="email"
              required
              placeholder="Your Email"
            />
            <label className="text-[18px] font-semibold block mt-[35px]">
              Confirm Password
            </label>
            <input
              className="border p-[15px] mt-[20px] rounded-xl w-full"
              type="password"
              required
              name="password"
              placeholder="Your Password"
            />

            <input
              className="border cursor-pointer text-[20px] font-semibold text-white bg-[#FF3811] p-[15px] mt-[20px] rounded-xl w-full"
              type="submit"
              value="Sign Up"
            />
          </form>

          <div className="mt-[30px] text-center">
            <p className="font-semibold text-[18px] text-[#444444]">
              Or Sign Up with
            </p>
            <div className="mt-[30px] ">
              <button>
                <i className="fa-brands text-4xl p-[15px] mx-2 rounded-full bg-gray-300 fa-facebook"></i>
              </button>
              <button>
                <i className="fa-brands text-4xl p-[15px] mx-2 rounded-full bg-gray-300 fa-linkedin"></i>
              </button>
              <button>
                <i className="fa-brands text-4xl p-[15px] mx-2 rounded-full bg-gray-300 fa-google"></i>
              </button>

              <p className="my-[50px] text-[18px] text-[#444444]">
                Already have an account?
                <Link to="/login" className="text-[#FF3811] font-semibold">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
