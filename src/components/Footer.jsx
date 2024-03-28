import React from "react";
import { NavLink } from "react-router-dom";
const Footer = () => {
    return (
        <div className="w-100 h-[50%]">
            <div className="p-10 bg-gray-800 text-gray-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                        <div className="mb-5">
                            <h4>Compnay Name</h4>
                            A123 lost street <br />
                            Chadlens PB 112232 <br />
                            Ghana <br /><br />
                            <strong>Phone:</strong> : +233 (0)24 124 3373 <br />
                            <strong>Email:</strong> : addlifetoyears@gmail.com <br />
                        </div>
                        <div className="mb-5">
                            <h4>Useful Links</h4>
                            <ul className="flex  justify-center items-center">
                                <li className={"p-2 "}>
                                    <NavLink to={"/"}>Home</NavLink>
                                </li>
                                <li className={"p-2 "}>
                                    <NavLink to={"/about"}>Cancer</NavLink>
                                </li>
                                <li className={"p-2 "}>
                                    <NavLink to={"/involved"}>Get Involved</NavLink>
                                </li>
                                <li className={"p-2 "}>
                                    <NavLink to={"/support"}>Lymphoma Support</NavLink>
                                </li>
                                <li className={"p-2 "}>
                                    <NavLink to={"/foundation"}>Our Foundation</NavLink>
                                </li>
                                <li className={"p-2 "}>
                                    <NavLink to={"/events"}>News & Events</NavLink>
                                </li>
                                <li className={"p-2 "}>
                                    <NavLink to={"/projects"}>Projects</NavLink>
                                </li>
                                <li className={"p-2"}>
                                    <NavLink to={"/gallery"}>Gallery</NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="mb-5">

                        </div>
                        <div className="mb-5">

                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default Footer;