"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AvatarGenerator } from "random-avatar-generator";
import Link from "next/link";
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

  const validateForm = () => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Invalid email address";
    }
    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen p-10 m-2">
      <form className="space-y-4 w-full max-w-2xl shadow-lg p-10">
        <h1 className="text-xl text-center font-semibold text[#3D3B40]">
          Chat<span className="font-bold text-[#525CEB]">App</span>
        </h1>
        {/* Avatar */}

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
        {/* Name */}

        <div>
          <label className="label">
            <span className="text-base label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Enter your name!"
            className="w-full input input-bordered"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
          {errors.name && (
            <span className="text-sm text-red">{errors.name}</span>
          )}
        </div>
        {/* Email */}

        <div>
          <label className="label">
            <span className="text-base label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Enter your email!"
            className="w-full input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          {errors.email && (
            <span className="text-sm text-red">{errors.email}</span>
          )}
        </div>
        {/* Password */}
        <div>
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password!"
            className="w-full input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          {errors.password && (
            <span className="text-sm text-red">{errors.password}</span>
          )}
        </div>
        {/* Confirm Password */}

        <div>
          <label className="label">
            <span className="text-base label-text">Confirm Password</span>
          </label>
          <input
            type="password"
            placeholder="Confirm your password!"
            className="w-full input input-bordered"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
          {errors.confirmPassword && (
            <span className="text-sm text-red">{errors.confirmPassword}</span>
          )}
        </div>
        {/* Button */}
        <div>
          <button
            className="btn btn-block bg-[#525CEB] text-white"
            type="submit"
          >
            {loading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Register"
            )}
          </button>

          <span>
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              Login
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}

export default page;
