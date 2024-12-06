
import { useContext } from "react";
import { FaRegCircleUser } from "react-icons/fa6";
import { AuthContext } from "../../providers/Context";

const MyProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
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
          {user.photoURL ? (
            <img
              className="w-40 h-40 rounded-full mb-4 border-4 border-blue-500 shadow-lg hover:scale-110 hover:rotate-5 transition-transform"
              src={user.photoURL}
              alt="Profile"
            />
          ) : (
            <div className="w-40 h-40 rounded-full mb-4 border-4 border-blue-500 shadow-lg hover:scale-110 hover:rotate-5 transition-transform flex items-center justify-center bg-gray-100">
              <FaRegCircleUser className="text-6xl text-gray-400" />
            </div>
          )}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-2">{user.displayName}</h2>
            <p className="text-gray-600">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
