import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import MyEquipmentCard from "./MyEquipmentCard";

const MyEquipment = () => {
    const data = useLoaderData();
    const [addedEquipment, setAddedEquipment] = useState(data);

    const { user } = useContext(AuthContext);

    const {
        image,
        itemName,
        categoryName,
        description,
        price,
        rating,
        customization,
        processingTime,
        stockStatus,
        addedBy,
    } = data[0] || {};

    // const { email } = addedBy || {};
    //   const { email } = user || {};

    // console.log(addedBy);

    const filterByUser = () => {
        if (!user || !user.email) return [];

        return addedEquipment.filter((equipment) => {
            const { addedBy } = equipment;
            return addedBy && addedBy.email === user.email;
        });
    };

    const filteredEquipment = filterByUser();

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  py-10">
            {filteredEquipment.length > 0 ? (
                filteredEquipment.map((equipment, index) => (
                    <MyEquipmentCard key={index} equipment={equipment} />
                ))
            ) : (
                <p className="text-center font-bold text-5xl">No equipment added by you.</p>
            )}
        </div>
    );
};

export default MyEquipment;