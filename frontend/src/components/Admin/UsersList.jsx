import React, { useEffect } from "react";
import { getAdminProduct } from "../../actions/productAction";
import { getAllUsers } from "../../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";


const UsersList = () => {
  const { user } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.allUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers(user));
  }, [dispatch, user]);

  return (
    <>
    <Sidebar/>
      <div className="min-h-screen bg-gray-100 py-6">
      
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          <p className="text-gray-700 mt-2">Logged in as: {user.email}</p>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {users &&
              users.map((u) => (
                <div
                  key={u._id}
                  className={`bg-white overflow-hidden shadow-md rounded-lg ${
                    u._id === user._id ? "outline-dotted" : ""
                  }`}
                >
                  <div className="p-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      Name: {u.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500">
                      Email: {u.email}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">
                      CreatedAt: {u.createdAt}
                    </p>
                    <p className="mt-2 text-sm text-gray-500">Role: {u.role}</p>

                    {/* Add more user information here */}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default UsersList;
