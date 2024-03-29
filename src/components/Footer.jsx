import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <div className="w-100 h-[50%]">
            <div className="p-10 bg-purple-900 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Add Life To Years Cancer Foundation</h4>
                            <p className="text-gray-100">
                                A123 lost street <br />
                                Tema PB 112232 <br />
                                Ghana <br /><br />
                                <strong>Phone:</strong> : +233 (0)54 720 3373 <br />
                                <strong>Email:</strong> : addlifetoyears@gmail.com <br />
                            </p>
                        </div>
                        <div className="mb-5 flex flex-col ">
                            <h4 className="text-2xl pb-4">Useful Links</h4>
                            <ul className="justify-center items-center">
                                <li className={"py-1 "}>
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li className={"py-1 "}>
                                    <NavLink to={"/about"}>Cancer</NavLink>
                                </li>
                                <li className={"py-1 "}>
                                    <NavLink to={"/involved"}>Get Involved</NavLink>
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
                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Join Our Newsletter</h4>
                            <p>Join 1,500+ others and never miss out on our health tips and more</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Footer;