import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { resetPassword } from "../redux/userSlice";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { token } = useParams();

  const forgotFunc = () => {
    let res = dispatch(resetPassword({ token, password }));

    console.log(res, "res");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-1/3 space-y-3">
        <div className="text-2xl">create new password</div>
        <Input
          placeholder={"new password"}
          onchange={(e) => setPassword(e.target.value)}
          name={"password"}
          id={""}
          type={"password"}
        />
        <Button name={"submit"} onClick={forgotFunc} />
      </div>
    </div>
  );
};

export default ResetPassword;
