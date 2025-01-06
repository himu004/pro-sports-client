import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaSortAmountUp } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const AllEquipment = () => {
  const data = useLoaderData();
  // console.log(data);

  const [sortedData, setSortedData] = useState(data);

  const handleSortByPrice = () => {
    // const newData = [...data].sort((a, b) => b.price - a.price);
    // setSortedData(newData);

    fetch("https://pro-sports-server.vercel.app/all-equipment/sort/")
      .then((res) => res.json())
      .then((data) => setSortedData(data));
  };

  return (
    <div className="container mx-auto py-5">
      <Helmet>
        <title>All Equipment | Pro Sports</title>
      </Helmet>
      <div className="btn btn-neutral btn-outline my-5">
        <button onClick={handleSortByPrice} className="flex items-center gap-2">
          <FaSortAmountUp />
          Sort By Price
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {(sortedData || data).map((item) => (
          <div key={item._id} className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={item.image}
                alt={item.itemName}
                className="rounded-xl h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.itemName}</h2>
              <p className="text-gray-600">Category: {item.category}</p>
              <p className="text-lg font-semibold">Price: ${item.price}</p>
              <p className="text-sm text-gray-500">
                Added by: {item.addedBy.name}
              </p>
              <div className="card-actions justify-end mt-4">
                <Link
                  to={`/all-equipment/${item._id}`}
                  className="btn btn-neutral btn-outline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllEquipment;
