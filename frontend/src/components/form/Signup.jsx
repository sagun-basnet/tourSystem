import MySvg from "../../image/svg/signup.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaAddressBook } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
// import axios from "axios";

const Signup = () => {
    const [values, setValues] = useState({
        name: "",
        address: "",
        phone: "",
        email: "",
        password: "",
    })

    const navigate = useNavigate();

    const handleChange = (e) => {
        e.preventDefault();
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // axios.post('http://localhost:8800/api/auth/register', values).then(res => console.log(res)).then(err => console.log(err))
        navigate('/login');
    }

    return (
        <div className="w-full h-[100vh] grid place-items-center transition ease-in-out duration-700">
            <div className="h-[80%] w-[65%]  rounded-xl shadow-2xl flex">
                <div className="h-full w-1/2 pl-14 pt-14 font-heading">
                    <div className="flex flex-col justify-end">
                        <h3 className="w-full text-4xl font-bold">Register</h3>
                        <form
                            action=""
                            method="post"
                            className="flex flex-col justify-center gap-4 items-start mt-10"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col gap-5 w-[80%]">
                                <div className="flex items-center w-full relative">
                                    <FaUserAlt className="absolute" />
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Enter Full Name"
                                        className="font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center w-full relative">
                                    <FaAddressBook className="absolute" />
                                    <input
                                        type="text"
                                        name="address"
                                        id="address"
                                        placeholder="Enter Full Address"
                                        className="font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center w-full relative">
                                    <FaPhoneSquareAlt className="absolute" />
                                    <input
                                        type="number"
                                        name="phone"
                                        id="phone"
                                        placeholder="Enter your phone "
                                        className="font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center w-full relative">
                                    <MdEmail className="absolute" />
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter Email Address"
                                        className="font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex items-center w-full relative">
                                    <RiLockPasswordFill className="absolute" />
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter your Password"
                                        className="font-semibold border-0 !border-b-2 w-[80%] border-black border-botton px-8"
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <input
                                    className="cursor-pointer"
                                    type="checkbox"
                                    name="check"
                                    id=""
                                />{" "}
                                <span className="pl-2 font-semibold">
                                    {" "}
                                    I agree your terms and conditions
                                </span>
                            </div>
                            <button className="bg-primary p-2 px-4 font-bold rounded-sm hover:bg-lightPrimary transition-colors duration-200 mt-4" type="submit">
                                Sign Up
                            </button>
                            <div className="flex gap-4 mt-6">
                                <span className="font-semibold">or signup with</span>
                                <button className="p-1 rounded-md text-white bg-[#276bff]">
                                    <FaFacebookF />
                                </button>
                                <button className="p-1 rounded-md text-white bg-black">
                                    <FaXTwitter />
                                </button>
                                <button className="p-1 rounded-md text-white bg-[#DB4437]">
                                    <IoLogoGoogle />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="h-full w-1/2 flex flex-col items-center">
                    <img className="h-[90%] w-full" src={MySvg} alt="MySvg" />
                    <NavLink to="/login">
                        <p className="underline font-bold">Already have an account?</p>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Signup;
