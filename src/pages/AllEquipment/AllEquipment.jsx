import { useContext, useEffect, useState } from "react";
import { FaSortAmountUp } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";

const AllEquipment = () => {
    const data = useLoaderData();
    // console.log(data);

    const [savedUser, setSavedUser] = useState(null);
    const [sortedData, setSortedData] = useState(data);
    const { user, loading } = useContext(AuthContext);
    //   console.log(user);

    const { displayName, email } = user || {};

    useEffect(() => {
        if (email) {
            fetch("https://pro-sports-server.vercel.app/users")
                .then((res) => res.json())
                .then((data) => {
                    const loggedInUser = data.find((user) => user.email === email);
                    setSavedUser(loggedInUser);
                });
        }
    }, [email]);

    const handleSortByPrice = () => {
        const newData = [...data].sort((a, b) => b.price - a.price);
        setSortedData(newData);
    };

    return (
        <div className="container mx-auto py-5">
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
                                <td>{loading? <span className="loading loading-infinity loading-lg"></span> : user ? displayName || savedUser?.name : ""}</td>
                                <td>
                                    <button className="btn btn-neutral btn-outline btn-sm">
                                        View Details
                                    </button>
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
