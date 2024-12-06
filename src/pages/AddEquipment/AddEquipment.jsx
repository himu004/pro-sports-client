import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Context";
import Swal from "sweetalert2";

const AddEquipment = () => {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(1);
  const [savedUser, setSavedUser] = useState(null);

  const { displayName, email } = user || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission

    const form = e.target;
    const image = form.image.value;
    const itemName = form.itemName.value;
    const category = form.category.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const stock = form.stock.value;
    const processingTime = form.processingTime.value;
    const customization = form.customization.value;
    const description = form.description.value;
    const addedBy = {
        email: user.email,
        name: user.displayName || savedUser?.name
    };
    
    const formData = {
     image,
     itemName,
     category,
     rating,
     price,
     stock,
     processingTime,
     customization,
     description,
     addedBy
    };
    console.log(formData);

    fetch('https://pro-sports-server.vercel.app/new-equipment', {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        console.log('new equpment added to db',data);
        if(data.insertedId){
            form.reset();
            Swal.fire({
                icon: 'success',
                title: 'Equipment Added Successfully',
                showConfirmButton: false,
                timer: 1500
              });
        }
    })

  };

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

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Add New Equipment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              name="itemName"
              className="input input-bordered"
              required
            />
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
              <option value="basketball">Jym Equipment</option>
              <option value="basketball">Sports Shoes</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating (1-5)</span>
            </label>
            <input
              type="range"
              min="1"
              max="5"
              name="rating"
              value={rating || 1}
              onChange={(e) => setRating(e.target.value)}
              className="range range-primary"
            />
            <div className="text-center mt-2">{rating}</div>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="number"
              name="stock"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time (days)</span>
            </label>
            <input
              type="number"
              name="processingTime"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Customization Options</span>
            </label>
            <input
              type="text"
              name="customization"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={user?.email}
              className="input input-bordered"
              readOnly
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={user ? displayName || savedUser?.name || "" : ""}
              className="input input-bordered"
              readOnly
            />
          </div>
        </div>

        <div className="form-control mt-6">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            name="description"
            className="textarea textarea-bordered h-24"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Add Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEquipment;
