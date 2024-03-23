import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
// import MetaData from "../layout/MetaData";
import Loader from '../layouts/Loader/Loader'
import { FaUser, FaEnvelope, FaCalendar, FaEdit, FaLock } from "react-icons/fa";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="flex p-4 justify-center">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
              <h1 className="text-2xl font-semibold mb-4">My Profile</h1>
              <img
                src={user.avatar.url}
                alt={user.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <Link
                to="/me/update"
                className="block text-center text-blue-500 hover:underline"
              >
                <FaEdit className="inline-block mr-1 mb-1" />
                Edit Profile
              </Link>
              <div className="mt-6">
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-1">Full Name</h4>
                  <p>{user.name}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p>{user.email}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-lg font-semibold mb-1">Joined On</h4>
                  <p>{String(user.createdAt).substr(0, 10)}</p>
                </div>
                <div className="space-y-2">
                  <Link
                    to="/orders"
                    className="block text-blue-500 hover:underline"
                  >
                    My Orders
                  </Link>
                  <Link
                    to="/password/update"
                    className="block text-blue-500 hover:underline"
                  >
                    Change Password
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profile;
