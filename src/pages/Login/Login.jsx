import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/Context";
import Swal from "sweetalert2";

const Login = () => {
  const {
    signInUser,
    signUpWithGoogle,
  } = useContext(AuthContext);

  const location = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    const formData = { name, email };
    console.log(formData);

    signInUser(email, password)
      .then((res) => {
        // console.log(res.user);
        Swal.fire({
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 2000,
          });
        e.target.reset();
        location("/");
      })
      .catch((err) => {
        console.log(err.message);
        const errorr = err.message;
        Swal.fire({
          icon: "error",
          title: errorr,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      await signUpWithGoogle();
      Swal.fire({
        icon: "success",
        title: "Login Success with Google",
        showConfirmButton: false,
        timer: 2000,
      });
      location("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="pt-10 flex items-center justify-center ">
      <Helmet>
        <title>Login | Pro Sports</title>
      </Helmet>
      <div className="backdrop-blur-sm p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 w-full max-w-md">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-500">
          Welcome Back
        </h2>
        <div className="mb-6">
          <button 
          onClick={handleGoogleSignIn}
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

        <form onSubmit={handleLogin} className="space-y-5">
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
          <button
            type="submit"
            className="w-full py-3 px-4 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transform hover:-translate-y-1 transition-all duration-300 font-semibold shadow-lg"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-gray-600">
          {`Don't`} have an account?
          <Link
            to="/register"
            className="text-purple-600 hover:text-purple-800 ml-1 font-semibold"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
