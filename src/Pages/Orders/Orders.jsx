import { useEffect, useState } from "react";
import "./Booking.css";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [data, setData] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    fetch("https://emapp-sub-server.vercel.app/bookingData")
      .then((res) => res.json())
      .then((result) => {
        // Filter out objects that have the action: "deleted"
        const filteredData = result.filter((item) => item.action !== "deleted");
        setData(filteredData); // Set the filtered data to state
      })
      .catch((error) => console.error(error));
  }, [data]);
  // console.log(data)

  const handleDelete = async (id, email) => {
    navigate(`/confirmOrders/${id}`);
    
  };
  return (
    <div>
      <div className="tableContainer">
        <div class="px-5">
          <div class="">
            <div>
              <h2 class="text-2xl font-semibold text-white leading-tight text-center my-5">
                Upcoming Booking Information
              </h2>
            </div>
            <div class="overflow-x-auto">
              <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Email
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Selected Center
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Time
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Car Brand
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Car Model
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Car PlateNo
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Car Year
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Services
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((invoice) => (
                      <tr key={invoice.id}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex">
                            <div className="ml-3">
                              <p className="text-gray-900 whitespace-no-wrap">
                                {invoice.name}
                              </p>
                              <p className="text-gray-600 whitespace-no-wrap">
                                {invoice.id}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {invoice.email}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {invoice.selectedCenter}
                          </p>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span
                            className={`relative inline-block px-3 py-1 font-semibold leading-tight`}
                          >
                            <span
                              aria-hidden
                              className={`absolute inset-0 opacity-50 rounded-full`}
                            ></span>
                            <span className="relative">
                              {new Date(invoice.date).toLocaleDateString()}
                            </span>
                          </span>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          {invoice.time}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          {invoice.brand}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          {invoice.carModel}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          {invoice.plateNo}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          {invoice.year}
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          {
                            invoice.selectedServices.map((service,index)=>
                              <div className="mb-1">{index+1}. {service}</div>
                            )
                          }
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                          <span
                            onClick={() =>
                              handleDelete(invoice._id, invoice.email)
                            }
                            className="bg-yellow-400 p-2 cursor-pointer rounded-xl"
                          >
                            Done
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
