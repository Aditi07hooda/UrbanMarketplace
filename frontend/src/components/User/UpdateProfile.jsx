// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, updateProfile, loadUser } from "../../actions/userAction";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast"; // Importing react-hot-toast
// import Loader from "../layouts/Loader/Loader";

// const UpdateProfile = () => {
//   const dispatch = useDispatch();
//   const Navigate = useNavigate();
//   const { user } = useSelector((state) => state.user);
//   const { error, isUpdated, loading } = useSelector((state) => state.profile);

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [avatar, setAvatar] = useState();
//   const [avatarPreview, setAvatarPreview] = useState();

//   const updateProfileSubmit = (e) => {
//     e.preventDefault();

//     const myForm = new FormData();

//     myForm.set("name", name);
//     myForm.set("email", email);
//     myForm.set("avatar", avatar);
//     dispatch(updateProfile(myForm));
//   };

//   const updateProfileDataChange = (e) => {
//     const reader = new FileReader();

//     reader.onload = () => {
//       if (reader.readyState === 2) {
//         setAvatarPreview(reader.result);
//         setAvatar(reader.result);
//       }
//     };

//     reader.readAsDataURL(e.target.files[0]);
//   };

//   useEffect(() => {
//     if (user) {
//       setName(user.name);
//       setEmail(user.email);
//       setAvatarPreview(user.avatar.url);
//     }

//     if (error) {
//       toast.error(error); // Using react-hot-toast for error toast
//       dispatch(clearErrors());
//     }

//     if (isUpdated) {
//       toast.success("Profile Updated Successfully"); // Using react-hot-toast for success toast
//       dispatch(loadUser());

//       Navigate("/account");

//       dispatch({
//         type: "UPDATE_PROFILE_RESET",
//       });
//     }
//   }, [dispatch, error, Navigate, user, isUpdated]);

//   return (
//     <div className="updateProfileContainer bg-gray-300 flex justify-center items-center fixed top-0 left-0 w-full h-full">
//       {loading ? (
//         <Loader />
//       ) : (
//         <div className="updateProfileBox bg-white w-1/4 h-70 p-4 overflow-hidden shadow-md">
//           <h2 className="updateProfileHeading text-2xl text-center border-b-2 border-gray-300 py-2 mx-auto w-1/2">
//             Update Profile
//           </h2>
//           <form
//             className="updateProfileForm flex flex-col items-center justify-evenly h-70 transition-all duration-500"
//             encType="multipart/form-data"
//             onSubmit={updateProfileSubmit}
//           >
//             <div className="updateProfileName relative w-full">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 required
//                 name="name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="py-1 px-4 w-full border border-gray-300 rounded"
//               />
//             </div>
//             <div className="updateProfileEmail relative w-full">
//               <input
//                 type="email"
//                 placeholder="Email"
//                 required
//                 name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="py-1 px-4 w-full border border-gray-300 rounded"
//               />
//             </div>

//             <div id="updateProfileImage" className="flex flex-col items-center">
//               <img
//                 src={avatarPreview}
//                 alt="Avatar Preview"
//                 className="w-12 h-12 rounded-full my-4"
//               />
//               <input
//                 type="file"
//                 name="avatar"
//                 accept="image/*"
//                 onChange={updateProfileDataChange}
//                 className="py-2 px-4 border border-gray-300 rounded"
//               />
//             </div>
//             <input
//               type="submit"
//               value="Update"
//               className="updateProfileBtn bg-red-500 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-all duration-500"
//             />
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UpdateProfile;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, updateProfile, loadUser } from "../../actions/userAction";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast"; // Importing react-hot-toast
import Loader from "../layouts/Loader/Loader";

const UpdateProfile = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { error, isUpdated, loading } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState();

  const updateProfileSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("avatar", avatar||'') ;
    dispatch(updateProfile(myForm));
  };

  const updateProfileDataChange = (e) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAvatarPreview(reader.result);
        setAvatar(reader.result);
      }
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (user) {
      setName(user.name);
      setEmail(user.email);
      setAvatarPreview(user.avatar.url);
    }

    if (error) {
      toast.error(error); // Using react-hot-toast for error toast
      dispatch(clearErrors());
    }

    if (isUpdated) {
      toast.success("Profile Updated Successfully"); // Using react-hot-toast for success toast
      dispatch(loadUser());

      Navigate("/account");

      dispatch({
        type: "UPDATE_PROFILE_RESET",
      });
    }
  }, [dispatch, error, Navigate, user, isUpdated]);

  return (
    <div className="updateProfileContainer bg-gray-100 min-h-screen flex justify-center py-8">
      {loading ? (
        <Loader />
      ) : (
        <div className="updateProfileBox bg-white w-80 p-4 shadow-md">
          <h2 className="updateProfileHeading text-lg text-center border-b-2 border-gray-300 pb-2 mb-4">
            Update Profile
          </h2>
          <form
            className="updateProfileForm space-y-4"
            encType="multipart/form-data"
            onSubmit={updateProfileSubmit}
          >
            <div className="updateProfileName">
              <input
                type="text"
                placeholder="Name"
                required
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border rounded py-1 px-2"
              />
            </div>
            <div className="updateProfileEmail">
              <input
                type="email"
                placeholder="Email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border rounded py-1 px-2"
              />
            </div>

            <div id="updateProfileImage" className="flex flex-col items-center">
              <img
                src={avatarPreview}
                alt="Avatar Preview"
                className="w-12 h-12 rounded-full my-4"
              />
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={updateProfileDataChange}
                className="border rounded py-2 px-4"
              />
            </div>
            <input
              type="submit"
              value="Update"
              className="updateProfileBtn bg-black hover:bg-blue-500 text-white font-semibold py-2 px-4 rounded transition-all duration-300"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
