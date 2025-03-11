import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../redux/userSlice";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const forgotFunc = () => {
    let res = dispatch(forgotPassword(email));

    console.log(res, "res");
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-1/3 space-y-3">
        <div className="text-2xl">i forgot my password</div>
        <Input
          placeholder={"email"}
          onchange={(e) => setEmail(e.target.value)}
          name={"email"}
          id={""}
          type={"text"}
        />
        <Button name={"submit"} onClick={forgotFunc} />
      </div>
    </div>
  );
};

export default ForgotPassword;
