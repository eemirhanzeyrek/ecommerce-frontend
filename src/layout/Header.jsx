import React, { useState } from "react";
import { SlBasket } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getKeyword } from "../redux/generalSlice";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const menuItems = [
    {
      name: "Profile",
      url: "/profile",
    },
    {
      name: "Admin",
      url: "/admin",
    },
    {
      name: "Logout",
      url: "/logout",
    },
  ];

  const keywordFunc = () => {
    dispatch(getKeyword(keyword));
    setKeyword("");
    navigate("/products ");
  };

  return (
    <div className="bg-gray-100 h-20 px-8 flex items-center justify-between">
      <div className="text-3xl cursor-pointer">Logo</div>
      <div className="flex items-center gap-5">
        <div className="flex items-center">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="p-2 outline-none rounded-lg"
            type="text"
            placeholder="search"
          />
          <div
            onClick={keywordFunc}
            className="p-2 ml-1 bg-white cursor-pointer rounded-lg"
          >
            search
          </div>
        </div>
        <div className="relative">
          <img
            onClick={() => setOpenMenu(!openMenu)}
            className="w-8 h-8 rounded-full cursor-pointer"
            src="/default.png"
            alt="profile"
          />
          {openMenu && (
            <div className="absolute right-0 mt-3 w-[200px] bg-white shadow-lg shadow-gray-400">
              {menuItems.map((item, index) => (
                <div className="px-2 py-1 hover:bg-gray-100" key={index}>
                  {item.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="relative cursor-pointer">
          <SlBasket size={30} />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
