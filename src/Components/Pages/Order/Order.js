import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthProvaider } from "../../GobalContext/GobalContext";
import Banar from "../ServiceDetails/Banar";
import swal from "sweetalert";

const Order = () => {
  const { user, userSignOut } = useContext(AuthProvaider);

  const [orders, setOrders] = useState([]);
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    fetch(
      `https://genius-car-mechanic-server.vercel.app/orders?email=${user?.email}`,
      {
        headers: {
          authorazitation: `Bearer ${localStorage.getItem("genius_token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          userSignOut();
        }
        return res.json();
      })
      .then((data) => {
        setOrders(data);
        setDeleted(false);
      });
  }, [user, deleted]);

  const orderDeletedhandelar = (email, id) => {
    swal({
      title: "Are you sure?",
      text: "Deleted This Order!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(
          `https://genius-car-mechanic-server.vercel.app/deleted?email=${email}&id=${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              if (data.deletedCount === 1) {
                setDeleted(true);
                swal("Done! Your Order has been deleted!", {
                  icon: "success",
                });
              }
            }
          });
      } else {
        swal("Your Order is safe!");
      }
    });
  };
  return (
    <div className="max-w-[1140px] mx-auto">
      <div>
        <Banar text={"Cart Details"} />
        <div className="text-center mb-[30px]">
          <h2 className="text-[35px] font-bold text-[#ff3811]">
            Your Select Card :{" "}
            <span className="text-black">{orders.length}</span>
          </h2>
        </div>
        <div>
          <div className="">
            {orders.map((order) => (
              <div className="m-3 " key={order._id}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <img
                      className="w-[150px] h-[150px] rounded-xl"
                      src={order.service.img}
                      alt={order.service.title}
                    />
                    <div className="ml-4">
                      <p className="text-[35px] font-bold ">
                        {order.service.title}
                      </p>
                      <p className="text-[25px] text-[#ff3811] font-semibold">
                        Price: ${order.service.price}
                      </p>
                    </div>
                  </div>
                  <div>
                    <button className="text-[20px] py-2 px-10 mr-4 text-white rounded-xl bg-yellow-400">
                      Pending
                    </button>

                    <button
                      onClick={() =>
                        orderDeletedhandelar(order.email, order._id)
                      }
                      className="text-[20px] py-2 px-10 mr-4 text-white rounded-xl bg-[#ff3811]"
                    >
                      Deleted
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center mt-[50px]">
            <Link to="/">
              <button className="flex">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                    />
                  </svg>
                </span>
                <p className="px-3">Continue Shopping</p>
              </button>
            </Link>
            <button className="flex">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </span>
              <p className="px-3">Clear Shopping Cart</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
