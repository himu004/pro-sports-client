import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const data = useLoaderData();
  const { _id } = data;
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(data?.rating || 1);
  const [savedUser, setSavedUser] = useState(null);

  const [image, setImage] = useState(data?.image || "");
  const [itemName, setItemName] = useState(data?.itemName || "");
  const [category, setCategory] = useState(data?.category || "");
  const [price, setPrice] = useState(data?.price || "");
  const [stock, setStock] = useState(data?.stock || "");
  const [processingTime, setProcessingTime] = useState(
    data?.processingTime || ""
  );
  const [customization, setCustomization] = useState(data?.customization || "");
  const [description, setDescription] = useState(data?.description || "");

  const { displayName, email } = user || {};

  const location = useNavigate();

  const handleUpdateProduct = (e, _id) => {
    e.preventDefault();

    const updatedProduct = {
      image,
      itemName,
      category,
      rating,
      price,
      stock,
      processingTime,
      customization,
      description,
    };

    fetch(`https://pro-sports-server.vercel.app/my-equipment/update/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
            e.target.reset();
            Swal.fire({
                icon: "success",
                title: "Product Updated Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
        }
        location("/my-equipment");
      })
      .catch((err) => console.log(err));
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
    <div>
      <Helmet>
        <title>Update Product | Pro Sports</title>
      </Helmet>

      <form
        onSubmit={(e) => handleUpdateProduct(e, _id)}
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center mb-8">
          Update Your Equipment
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              name="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
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
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select select-bordered"
              required
            >
              <option value="">Select Category</option>
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="basketball">Basketball</option>
              <option value="gym">Gym Equipment</option>
              <option value="shoes">Sports Shoes</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
            <input
              type="number"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
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
              value={processingTime}
              onChange={(e) => setProcessingTime(e.target.value)}
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
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
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
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="textarea textarea-bordered h-24"
            required
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Update Equipment
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
