"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AvatarGenerator } from "random-avatar-generator";
function page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [avatarUrl, setAvatarUrl] = useState("");
  const router = useRouter();

  const generateRandomAvatar = () => {
    const generator = new AvatarGenerator();
    return generator.generateRandomAvatar();
  };

  const handleRefreshAvatar = () => {
    setAvatarUrl(generateRandomAvatar());
  };

  useEffect(() => {
    setAvatarUrl(generateRandomAvatar());
  }, []);
  return (
    <div className="flex justify-center items-center h-screen p-10 m-2">
      <form className="space-y-4 w-full max-w-2xl shadow-lg p-10">
        <h1 className="text-xl text-center font-semibold text[#3D3B40]">
          Chat<span className="font-bold text-[#525CEB]">App</span>
        </h1>
        <div className="flex items-center space-y-2 justify-between border border-gray-400 p-2">
          <img
            src={avatarUrl}
            className="rounded-full h-20 w-20"
            alt="avatar"
          ></img>
          <button
            onClick={handleRefreshAvatar}
            type="button"
            className="btn btn-outline"
          >
            New Avatar
          </button>
        </div>
      </form>
    </div>
  );
}

export default page;
