import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ConfirmOrder = () => {
  const { id } = useParams();
  const [price,setPrice]=useState()
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
  useEffect(() => {
    const getData=async()=>{
        await fetch("https://emapp-sub-server.vercel.app/bookingData")
      .then((res) => res.json())
      .then((result) => {
        const foundObject = result.find((obj) => obj._id === id);
        setData(foundObject)
        setLoading(false); 
      })
      .catch((error) => console.error(error));
      setLoading(false); 
    }
    getData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;  // Display a loading message while fetching data
  }

  const disabled=!price;

  const handleConfirm=async()=>{
    try {
      const response = await fetch(
        "https://emapp-sub-server.vercel.app/deleteBooking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id,price }),
        }
      );

      const data = await response.json();
      navigate('/orders')
      // if (response.ok) {
      //   const thanksData = {
      //     email: email,
      //   };
      //   fetch("https://vic-server.vercel.app/sendThanksemail", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(thanksData),
      //   }).console.log(data.message); // Booking marked as deleted
      //   // You may want to update the UI accordingly
      // } else {
      //   console.error(data.message); // Handle the error
      // }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  }
  // console.log(data);
  
  // console.log(foundObject);
  return (
    <div className="flex justify-center">
      <div className="pt-24 ">
        <div className="font-bold text-xl my-6">Booking Summary</div>
        <div className="font-bold  text-lg">Appointment Details</div>
        <div className="font-semibold  text-gray-500 text-lg">
          Name : {data.name}
        </div>
        <div className="font-semibold  text-gray-500 text-lg">
          Email : {data.email}
        </div>
        <div className="font-semibold  text-gray-500 text-lg">
          Booking Center : {data.selectedCenter.toUpperCase()}
        </div>
        <div className="font-semibold  text-gray-500 text-lg">
          Booking Date : {data.date}
        </div>
        <div className="font-semibold  text-gray-500 text-lg">
          Booking Time : {data.time}
        </div>
        <div className="font-bold mt-6 text-xl">Car Details</div>
        <div className="font-semibold  text-gray-500 text-lg">
          Car Plate No. : {data.plateNo}
        </div>
        <div className="font-semibold  text-gray-500 text-lg">
          Car Brand : {data.brand}
        </div>
        <div className="font-semibold  text-gray-500 text-lg">
          Car Model : {data.carModel}
        </div>
        <div className="font-semibold  text-gray-500 text-lg">
          Car Year : {data.year}
        </div>
        <div className="font-bold mt-6 text-xl">Service Type</div>
        <div>
          {data.selectedServices.map((service) => (
            <div className="font-semibold  text-gray-500 text-lg">
              {service}
            </div>
          ))}
        </div>
        <div className="w-full ">
        <div className="relative  flex flex-col gap-2">
          <label
            for="price"
            className="leading-7 text-lg my-3 text-black font-semibold labelDesign"
          >
            Price(TK)
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700  px-3 py-2 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
        <button
        disabled={disabled}
            onClick={handleConfirm}
          className={`border w-full border-gray-500 text-center py-2 my-6 rounded-lg bg-yellow-400 font-bold cursor-pointer
          ${disabled ? "text-gray-400 bg-yellow-100" : ""}`}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
