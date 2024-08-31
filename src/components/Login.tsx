"use client";
import { baseURL } from "@/utils/baseURL";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Spinner from "./Spinner";

const Login: React.FC = (): React.ReactNode => {
  const navigation = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    setIsLoading(true);
    await axios
      .post(`${baseURL}/login/`, data)
      .then((res) => {
        setData({
          email: "",
          password: "",
        });
        setError("");
        localStorage.setItem("token", res.data.access);
        navigation.replace("/dashboard");
      })
      .catch((err) => {
        setError(err.response.data[Object.keys(err.response.data)[0]]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="flex flex-col w-screen justify-center items-center">
      <Image
        src="/cyparta-logo.svg"
        alt="logo"
        width={225}
        height={102}
        className="m-auto mb-7"
        priority
      />
      <div className="flex flex-col gap-7 px-5 py-12 border-[1px] border-[#E9E9E9] rounded-xl w-96 md:w-1/3">
        <div className="flex flex-col gap-2">
          <div className="font-normal">Email Address</div>
          <input
            type="email"
            name="email"
            className={`border-[1px] border${
              !error ? "-[#333333]" : "-red-500"
            } outline-none p-3 rounded-lg w-full`}
            placeholder="ahmed@cyparta.com"
            value={data.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col gap-2">
          <div className="font-normal">Password</div>
          <input
            type="password"
            name="password"
            className={`border-[1px] border${
              !error ? "-[#333333]" : "-red-500"
            } outline-none p-3 rounded-lg w-full placeholder:translate-y-1`}
            placeholder="****************"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="w-4/5 py-3 bg-black text-white m-auto rounded-lg hover:opacity-50 font-semibold mt-5 mb-3"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : `Login`}
        </button>

        {error && (
          <div className="w-full bg-red-500 text-white font-medium p-3 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
