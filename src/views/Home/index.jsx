import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { logOut } from "../../store/reducers/authSlice";
import authModel from "../../models/auth.model";

const index = () => {
  const [user, setuser] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch(logOut());
    navigate("/");
  };

  const getdata = async () => {
    try {
      const res = await authModel.getUser();
      console.log("user =>>>>>>>>>", );
      setuser(res.user.username);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className=" flex-col gap-5 h-screen w-screen flex items-center justify-center">
      {user}
      <button
        onClick={() => logoutHandler()}
        className="bg-blue-400 text-white p-2"
      >
        logout
      </button>
    </div>
  );
};

export default index;
