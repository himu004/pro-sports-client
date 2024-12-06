import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import MyEquipmentCard from "./MyEquipmentCard";
import { Helmet } from "react-helmet";

const MyEquipment = () => {
  const data = useLoaderData();

  const [addedEquipment, setAddedEquipment] = useState(data);

  const { user } = useContext(AuthContext);

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
      <Helmet>
        <title>My Equipment | Pro Sports</title>
      </Helmet>
      {filteredEquipment.length > 0 ? (
        filteredEquipment.map((equipment, index) => (
          <MyEquipmentCard
            key={index}
            equipment={equipment}
            addedEquipment={addedEquipment}
            setAddedEquipment={setAddedEquipment}
          />
        ))
      ) : (
        <p className="text-center font-bold text-5xl">
          No equipment added by you.
        </p>
      )}
    </div>
  );
};

export default MyEquipment;
