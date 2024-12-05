
import { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import AllCategoryCard from './AllCategoryCard';

const AllCategories = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/category")
          .then((res) => res.json())
          .then((data) => setCategories(data));
      }, []);

    return (
        <div>
        
        <Fade cascade damping={0.3}>
        <div className="text-center mb-12 pt-10" data-aos="fade-down">
            <h2 className="text-4xl font-bold text-gray-800 mb-3">All Categories</h2>
            <p className="text-xl text-gray-600 md:px-0 px-3">
               Our All Products By Category
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
            {
                categories.map(category => <AllCategoryCard category={category} key={category._id} />)
            }
        </div>
    
        </Fade>
    </div>
    );

};

export default AllCategories;