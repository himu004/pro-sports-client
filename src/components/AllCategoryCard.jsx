const AllCategoryCard = ({ category }) => {
    const { image, categoryName } = category || {};
    return (
        <div className="card bg-base-100 image-full shadow-xl relative group">
            <figure>
                <img src={image} alt={categoryName} className="w-full h-full object-cover" />
            </figure>
            <div className="card-body flex items-center justify-center">
                <h2 className="card-title absolute transform scale-0 opacity-0 group-hover:scale-110 group-hover:opacity-100 text-white transition-all duration-500 ease-in-out">
                    {categoryName}
                </h2>
            </div>
            <div className="absolute inset-0 border-0 border-white opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:border-4 transition-all duration-500 ease-in-out"></div>
        </div>
    );
};

export default AllCategoryCard;
