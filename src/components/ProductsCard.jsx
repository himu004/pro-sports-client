const ProductsCard = ({ product }) => {
  const { image, itemName, categoryName, price, rating, customization } =
    product || {};

  // const {image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus} = product || {};

  return (
    <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
      <figure className="px-6 pt-6">
        <img
          src={image}
          alt={itemName}
          className="rounded-xl h-64 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-primary">{itemName}</h2>
        <div className="badge badge-secondary">{categoryName}</div>
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
        
          <div className="badge badge-outline">
            {customization}
          </div>
        <div className="card-actions justify-end mt-4">
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
