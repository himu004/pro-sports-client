// import { useContext } from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiUser, FiImage } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import Swal from "sweetalert2";
// import { AuthContext } from "../../providers/Context";

const Register = () => {

    const {createUser, signUpWithGoogle} = useContext(AuthContext);

    const location = useNavigate();

  const regEx = '^(?=.*[A-Z])(?=.*[a-z]).{6,}$';
 
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const formData  = {name, email, password, photoURL}
    if (!password.match(regEx)) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Password must be at least 6 characters long and contain at least one uppercase letter and one lowercase letter.",
        });
        return;
      }
    console.log(formData);
    createUser(email, password)
    .then(result => {
        console.log('user created at firebase', result.user);

        result.user.displayName = name;
        result.user.photoURL = photoURL;

        e.target.reset();
          Swal.fire({
            icon: "success",
            title: "Registration Success",
            showConfirmButton: false,
            timer: 2000,
          });
          location("/");

        // const createdAt = result?.user?.metadata?.creationTime;

        // Save new user to db
        // const newUser = {name, email, photoURL, createdAt}
        // fetch('http://localhost:3000/users', {
        //     method: 'POST',
        //     headers: {
        //         'content-type' : 'application/json'
        //     },
        //     body: JSON.stringify(newUser)
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log('user created to db',data);
        // })
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleSignUpWithGoogle = (e) => {
    
    if (e) {
      e.preventDefault();
    }
    
    signUpWithGoogle()
      .then((result) => {
        console.log(result.user);
        Swal.fire({
            icon: "success",
            title: "Registration Success with Google",
            showConfirmButton: false,
            timer: 2000,
          });
        location("/");
      })
      .catch((error) => {
       
        console.log(error.message);
      });
  };
  return (
    <div className="pt-5 flex items-center justify-center ">
    <Helmet>

        <title>Register | Pro Sports</title>
    </Helmet>
        <div className="backdrop-blur-sm p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full max-w-md">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-500">
            Welcome Back
          </h2>
          <div className="mb-6">
            <button 
            onClick={handleSignUpWithGoogle}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-white dark:bg-gray-800 border-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transform hover:-translate-y-1 transition-all duration-300 shadow-md">
              <FcGoogle className="text-2xl" />
              <span className="font-semibold text-gray-700 dark:text-gray-300">
                Continue with Google
              </span>
            </button>
          </div>

          <div className="relative flex items-center justify-center mb-6">
            <div className="border-t w-full border-gray-300 dark:border-gray-600"></div>
            <span className="bg-white dark:bg-gray-900 px-4 text-sm text-gray-500 dark:text-gray-400">
              or
            </span>
            <div className="border-t w-full border-gray-300 dark:border-gray-600"></div>
          </div>

          <form onSubmit={handleRegister} className="space-y-5">
          <div className="group relative">
            <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
            name="name"
              type="text"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Full Name"
              required
            />
          </div>
          <div className="group relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
            name="email"
              type="email"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Email"
              required
            />
          </div>
          <div className="group relative">
            <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
            name="password"
              type="password"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Password"
              required
            />
          </div>
          <div className="group relative">
            <FiImage className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
            name="photoURL"
              type="url"
              className="w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
              placeholder="Photo URL"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transform hover:-translate-y-1 transition-all duration-300 font-semibold shadow-lg"
          >
            Register
          </button>
        </form>
          <p className="mt-6 text-center text-gray-600">
            Already Have an Account?
            <Link
              to="/login"
              className="text-purple-600 hover:text-purple-800 ml-1 font-semibold"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
  );
};




export default Register;
