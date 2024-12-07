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
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Added By</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(sortedData || data).map((item) => (
                            <tr key={item._id} className="hover">
                                <td>{item.itemName}</td>
                                <td>{item.category}</td>
                                <td>{item.price}</td>
                                <td>{item.addedBy.name}</td>
                                <td>
                                    <Link to={`/all-equipment/${item._id}`} className="btn btn-neutral btn-outline btn-sm">
                                        View Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;
