import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";

const Profile = () => {
  const { user, isAuth } = useSelector((state) => state.user);

  return (
    <div className="min-h-screen">
      <div className="flex justify-center gap-5 my-10">
        <div className="">
          <img
            className="w-[200px] h-[200px] rounded-full"
            src={user?.user?.avatar?.url || "/default.png"}
            alt=""
          />
        </div>
        <div className="space-y-2">
          <div className="text-2xl font-bold">{user?.user?.name}</div>
          <div className="text-xl">{user?.user?.email}</div>
          <Button name={"Profile Update"} onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
