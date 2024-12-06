import { useContext, useState } from "react";
import { AuthContext } from "../../providers/Context";




const AddEquipment = () => {
    const { user } = useContext(AuthContext);
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <div className="min-h-screen bg-base-200 py-12 px-4">
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-8">Add New Equipment</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image URL</span>
                        </label>
                        <input type="url" name="image" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <input type="text" name="itemName" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select name="category" className="select select-bordered" required>
                            <option value="">Select Category</option>
                            <option value="cricket">Cricket</option>
                            <option value="football">Football</option>
                            <option value="basketball">Basketball</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" name="price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating (1-5)</span>
                        </label>
                        <input 
                            type="range" 
                            min="1" 
                            max="5" 
                            value={rating}
                            onChange={(e) => setRating(e.target.value)}
                            className="range range-primary" 
                        />
                        <div className="text-center mt-2">{rating}</div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <input type="number" name="stock" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Processing Time (days)</span>
                        </label>
                        <input type="number" name="processingTime" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Customization Options</span>
                        </label>
                        <input type="text" name="customization" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <input type="email" value={user?.email} className="input input-bordered" readOnly />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <input type="text" value={user?.displayName} className="input input-bordered" readOnly />
                    </div>
                </div>

                <div className="form-control mt-6">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered h-24" required></textarea>
                </div>

                <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Add Equipment</button>
                </div>
            </form>
        </div>
    );
};

export default AddEquipment;