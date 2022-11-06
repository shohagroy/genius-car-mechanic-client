import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../assets/images/login/login.svg";
import { AuthProvaider } from "../../GobalContext/GobalContext";

const Login = () => {
  const { userLogin } = useContext(AuthProvaider);

  const location = useLocation();
  const navigate = useNavigate();

  const path = location.state?.path?.pathname || "/";

  const userLoginHandelar = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        // Signed in
        const user = result.user;
        console.log(user);
        if (user) {
          const currentUser = {
            email: user.email,
          };

          fetch("http://localhost:5000/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              localStorage.setItem("genius_token", data.token);
            });

          navigate(path, { relative: true });
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(error);
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
            Login
          </h2>

          <form onSubmit={userLoginHandelar} className="px-[75px] mt-[50px]">
            <label
              className="text-[18px] font-semibold block mt-[35px]"
              htmlFor=""
            >
              Email
            </label>
            <input
              className="border p-[15px] mt-[20px] rounded-xl w-full"
              type="text"
              name="email"
              placeholder="Your Email"
              id=""
            />
            <label
              className="text-[18px] font-semibold block mt-[35px]"
              htmlFor=""
            >
              Confirm Password
            </label>
            <input
              className="border p-[15px] mt-[20px] rounded-xl w-full"
              type="text"
              name="password"
              placeholder="Your Password"
              id=""
            />

            <input
              className="border cursor-pointer text-[20px] font-semibold text-white bg-[#FF3811] p-[15px] mt-[20px] rounded-xl w-full"
              type="submit"
              value="Login"
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
                New user?
                <Link to="/signup" className="text-[#FF3811] font-semibold">
                  {" "}
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
