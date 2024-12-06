import { Link } from "react-router-dom";

const MyEquipmentCard = ({ equipment }) => {
  const {
    _id,
    image,
    itemName,
    category,
    description,
    price,
    rating,
    customization,
    processingTime,
    stock,
    addedBy,
  } = equipment || {};

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 h-full">
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt={itemName}
          className="rounded-xl h-64 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="md:flex items-center justify-between">
          <h2 className="card-title text-red-500">{itemName}</h2>
          <div className="badge badge-neutral">{category}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="rating rating-sm">
            {[...Array(5)].map((_, index) => (
              <input
                key={index}
                type="radio"
                name={`rating-${itemName}`}
                className="mask mask-star-2 bg-orange-400"
                checked={index + 1 === rating}
                readOnly
              />
            ))}
          </div>
          <span className="text-sm opacity-75">({rating})</span>
        </div>
        <p className="badge badge-outline badge-sm my-1">
          Added By: {addedBy.name}
        </p>
        <p className="text-lg font-semibold">${price}</p>
        <p>
          {" "}
          <span className="font-semibold">Customization:</span> {customization}
        </p>
        <p>
          {" "}
          <span className="font-semibold">Processing Time:</span>{" "}
          {processingTime}
        </p>
        <p>
          <span className="font-semibold">Description:</span> {description}
        </p>
        <p>
          <span className="font-semibold">StockStatus:</span> {stock}
        </p>
        <div className="mt-4 flex gap-3">
          <Link className="btn btn-square btn-outline flex-1 hover:btn-error">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Link>
          <Link className="btn btn-neutral btn-outline flex-1 hover:btn-success">
            Update Product
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentCard;
