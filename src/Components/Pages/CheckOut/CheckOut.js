import React, { useContext, useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { AuthProvaider } from "../../GobalContext/GobalContext";
import Banar from "../ServiceDetails/Banar";

import swal from "sweetalert";

const CheckOut = () => {
  const { user } = useContext(AuthProvaider);
  const [service] = useLoaderData([]);

  const navigate = useNavigation();

  const [orderDetails, setOrderDetails] = useState({});
  const { title, price, img } = service;

  const orderConfarmBlurHandelar = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    orderDetails[name] = value;
  };

  const orderConfarmHandelar = (event) => {
    event.preventDefault();

    const order = { ...orderDetails, service };

    setOrderDetails(order);

    fetch("https://genius-car-mechanic-server.vercel.app/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          swal("Good job!", "You Order has be Submited!", "success");
        }

        event.target.reset();
      });

    setOrderDetails({});
  };

  return (
    <div className="max-w-[1140px] mx-auto">
      <Banar text={"Check Out"} />

      <div className="grid grid-cols-2 mb-[30px] gap-6">
        <img className="rounded-xl " src={img} alt="" />
        <div>
          <h2 className="font-bold text-[35px]">
            Service: <span className="text-[#FF3811]">{title}</span>
          </h2>
          <p className="text-[20px] font-semibold text-[#ff3811]">
            Price: {price}
          </p>
        </div>
      </div>

      <div className="p-[100px] bg-[#F3F3F3] rounded-lg">
        <form onSubmit={orderConfarmHandelar}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <input
                onBlur={orderConfarmBlurHandelar}
                className="w-full p-[15px] rounded-lg bg-white"
                type="text"
                name="name"
                placeholder="Your Name"
                defaultValue={user?.displayName}
              />
            </div>
            <div>
              <input
                onBlur={orderConfarmBlurHandelar}
                className="w-full p-[15px] rounded-lg bg-white"
                type="text"
                placeholder="Your Address"
                name="address"
              />
            </div>
            <div>
              <input
                onBlur={orderConfarmBlurHandelar}
                className="w-full p-[15px] rounded-lg bg-white"
                type="text"
                placeholder="Your Phone"
                name="phone"
              />
            </div>
            <div>
              <input
                onBlur={orderConfarmBlurHandelar}
                className="w-full p-[15px] rounded-lg bg-white"
                type="text"
                placeholder="Your Email"
                defaultValue={user?.email}
                readOnly
                name="email"
              />
            </div>
            <div>
              <textarea
                onBlur={orderConfarmBlurHandelar}
                className="col-span-2 rounded-md p-4"
                placeholder="Your Message"
                name="details"
                cols="100"
                rows="10"
              ></textarea>
            </div>
          </div>
          <div>
            <input
              className="w-full mt-[24px] cursor-pointer bg-[#FF3811] text-[20px] font-semibold rounded-xl text-white py-[17px]"
              type="submit"
              value="Order Confirm"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
