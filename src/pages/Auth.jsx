import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [signUp, setSignUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isAuth } = useSelector((state) => state.user);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    avatar: "",
  });
  const [preview, setPreview] = useState("/default.png");

  const signUpFunc = () => {
    dispatch(register(data));
  };

  const signInFunc = () => {
    dispatch(login(data));
  };

  const handleChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setData((prev) => ({ ...prev, avatar: reader.result }));
          setPreview(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate("/");
    }
  }, [isAuth]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-1/3 -mt-10 border p-4 rounded-md">
        <div className="text-2xl">{signUp ? "sign up" : "sign in"}</div>
        {signUp && (
          <Input
            onChange={handleChange}
            value={data.name}
            type={"text"}
            name={"name"}
            id={""}
            placeholder={"name"}
          />
        )}
        <Input
          onChange={handleChange}
          value={data.email}
          type={"text"}
          name={"email"}
          id={""}
          placeholder={"email"}
        />
        <Input
          onChange={handleChange}
          value={data.password}
          type={"password"}
          name={"password"}
          id={""}
          placeholder={"password"}
        />
        {signUp && (
          <div className="flex items-center gap-2">
            <img className="w-10 h-10 rounded-full" src={preview} alt="" />
            <Input
              onChange={handleChange}
              type={"file"}
              name={"avatar"}
              id={""}
              placeholder={""}
            />
          </div>
        )}
        <div
          className="text-red-500 text-sm cursor-pointer my-2"
          onClick={() => setSignUp(!signUp)}
        >
          {signUp ? "sign in" : "sign up"}
        </div>
        <Button
          name={signUp ? "sign up" : "sign in"}
          onClick={signUp ? signUpFunc : signInFunc}
        />
      </div>
    </div>
  );
};

export default Auth;
