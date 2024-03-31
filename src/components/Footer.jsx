import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa"


const Footer = () => {
    return (
        <div className="w-100 h-[60%]">
            <div className="p-10 bg-purple-900 text-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Add Life To Years Cancer Foundation</h4>
                            <p className="text-gray-100">
                                Tema P.O. Box 11203 <br />
                                Greater Accra, Ghana <br /><br />
                                <strong>Phone:</strong> : +233 (0)54 720 3373 <br />
                                <strong>Email:</strong> : addlifetoyears@gmail.com <br />
                            </p>
                        </div>
                        <div className="mb-5 flex flex-col ">
                            <h4 className="text-2xl pb-4">Useful Links</h4>
                            <ul className="justify-center items-center">
                                <li className={"py-1 "}>
                                    <NavLink to={"/"}><div className="flex flex-row items-center"><FaChevronRight />Home</div></NavLink>
                                </li>
                                <li className={"py-1 "}>
                                    <NavLink to={"/about"}><div className="flex flex-row items-center"><FaChevronRight />Cancer</div></NavLink>
                                </li>
                                <li className={"py-1 "}>
                                    <NavLink to={"/involved"}><div className="flex flex-row items-center"><FaChevronRight />Get Involved</div></NavLink>
                                </li>
                                <li className={"py-1 "}>
                                    <NavLink to={"/support"}>Lymphoma Support</NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/foundation"}>Our Foundation</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Our Services</h4>
                            <ul className="justify-center items-center">
                                <li className={"py-1 "}>
                                    <NavLink to={"/events"}>Awareness Creation</NavLink>
                                </li>
                                <li className={"py-1 "}>
                                    <NavLink to={"/gallery"}>Health Talks</NavLink>
                                </li>
                                <li className={"py-1 "}>
                                    <NavLink to={"/support"}>Lymphoma Support</NavLink>
                                </li>

                            </ul>

                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Join Our Newsletter</h4>
                            <p>Join 1,500+ others and never miss out on our health tips and more</p>
                            <div className="my-4">
                                <div className="flex flex-col sm:flex-row items-center justify-between">
                                    <input className="w-full flex p-2 rounded-md text-[#333]" type="email" placeholder="Enter your Email" />
                                    <button className="bg-[#8e24aa] w-48 py-2 ml-4 my-6 rounded-md text-white font-medium">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;