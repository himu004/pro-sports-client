const ProductsCard = ({ product }) => {
  const { image, itemName, categoryName, price, rating, customization } =
    product || {};

  // const {image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus} = product || {};

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
          <div className="badge badge-neutral">{categoryName}</div>
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
        <p className="text-lg font-semibold">${price}</p>

        <div>{customization}</div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-neutral btn-outline w-full">
            Vew Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
