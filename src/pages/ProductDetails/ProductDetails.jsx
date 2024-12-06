import { useLoaderData, useParams } from "react-router-dom"

const ProductDetails = () => {
    const loaderData = useLoaderData()
    const { id } = useParams()
    const singleData = loaderData.find((item) => item.id === parseInt(id))
    
    const {image, itemName, categoryName, description, price, rating, customization, processingTime, stockStatus} = singleData || {};

    return (
        <div className="max-w-7xl mx-auto my-12 px-4">
            <div className="grid md:grid-cols-2 gap-8">
                <div className="overflow-hidden rounded-lg">
                    <img src={image} alt={itemName} className="w-full h-[500px] object-cover hover:scale-105 transition-transform" />
                </div>
                
                <div className="space-y-4">
                    <h1 className="text-3xl font-bold text-gray-500">{itemName}</h1>
                    <p className="text-gray-500">Category: {categoryName}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-semibold text-gray-500">${price}</span>
                        <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100 px-2 py-1 rounded text-sm">{rating} ★</span>
                    </div>
                    
                    <div className="border-t border-b border-gray-200 dark:border-gray-600 py-4 my-6">
                        <p className="text-gray-500">{description}</p>
                    </div>
                    
                    <div className="space-y-2">
                        <p className="text-gray-500">
                            <span className="font-medium text-gray-500">Customization:</span> {customization}
                        </p>
                        <p className="text-gray-500">
                            <span className="font-medium">Processing Time:</span> {processingTime}
                        </p>
                        <p className={`font-medium ${stockStatus === 'In Stock' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                            {stockStatus}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails;
