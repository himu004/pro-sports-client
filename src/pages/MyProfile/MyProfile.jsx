
import { useContext, useEffect, useState } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../providers/Context";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  const [savedUser, setSavedUser] = useState(null);

  const { email } = user || {};


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
    <div className="p-4 min-h-screen">
      <div
        className="bg-white shadow-xl rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-sm bg-opacity-90 mt-12"
       
      >
        <h1
          className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          
        >
          My Profile
        </h1>

        <div
          className="flex flex-col items-center mb-8"
         
        >
          {user ? (
            <img
              className="w-40 h-40 rounded-full mb-4 border-4 border-blue-500 shadow-lg hover:scale-110 hover:rotate-5 transition-transform"
              src={user.photoURL || savedUser?.photo}  
              alt="Profile"
            />
          ) : (
            <div className="w-40 h-40 rounded-full mb-4 border-4 border-blue-500 shadow-lg hover:scale-110 hover:rotate-5 transition-transform flex items-center justify-center bg-gray-100">
              <FaRegCircleUser className="text-6xl text-gray-400" />
            </div>
          )}
          <div className="text-center">
            <h2 className="text-xl font-bold mb-2">Name : {user.displayName || savedUser?.name}</h2>
            <p className="text-gray-600">Email: {user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
