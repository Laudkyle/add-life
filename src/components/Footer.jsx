import React from "react";
import { NavLink } from "react-router-dom";
import { FaChevronRight, FaFacebook, FaYoutube } from "react-icons/fa"


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
                                <li className="py-1">
                                    <NavLink to={"/"}><div className="flex flex-row items-center"><FaChevronRight size={10} />Home</div></NavLink>
                                </li>
                                <li className="py-1">
                                    <NavLink to={"/about"}><div className="flex flex-row items-center"><FaChevronRight size={10} />Cancer</div></NavLink>
                                </li>
                                <li className="py-1">
                                    <NavLink to={"/involved"}><div className="flex flex-row items-center"><FaChevronRight size={10} />Get Involved</div></NavLink>
                                </li>

                                <li className="py-1">
                                    <NavLink to={"/foundation"}><div className="flex flex-row items-center"><FaChevronRight size={10} />Our Foundation</div></NavLink>
                                </li>
                            </ul>

                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Our Services</h4>
                            <ul className="justify-center items-center">
                                <li className="py-1">
                                    <NavLink to={"/events"}><div className="flex flex-row items-center"><FaChevronRight size={10} />Awareness Creation</div></NavLink>
                                </li>
                                <li className="py-1">
                                    <NavLink to={"/gallery"}><div className="flex flex-row items-center"><FaChevronRight size={10} />Health Talks</div></NavLink>
                                </li>
                                <li className="py-1">
                                    <NavLink to={"/support"}><div className="flex flex-row items-center"><FaChevronRight size={10} />Lymphoma Support</div></NavLink>
                                </li>

                            </ul>

                        </div>
                        <div className="mb-5">
                            <h4 className="text-2xl pb-4">Join Our Newsletter</h4>
                            <p className="pb-2">Join 1,500+ others and never miss out on our health tips and more</p>
                            <div className="my-4">
                                <div className="flex flex-col sm:flex-row items-center justify-between">
                                    <div className="flex flex-row flex-wrap">
                                        <input className="w-2/3 p-2 text-[#333]" type="email" placeholder="email@example.com" />
                                        <button className="w-1/3 bg-[#8e24aa] p-2  text-white font-medium hover:bg-pink-600">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#8e24aa] text-gray-100 px-10">
                <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center">
                    <div className="text-center">
                        <div>Copyright <strong><span>Addlifetoyears Cancer Foundation</span></strong> <br/>All Rights Resevered</div>
                    </div>
                    <div className="flex flex-row gap-2 text-center text-xl text-white my-2">
                        <a href="#" className="rounded-full mx-1 bg-white pt-2"><FaFacebook color="blue" size={50}/></a>
                        <a href="#" className="rounded-full mx-2 bg-white pt-2"><FaYoutube size={50} color="red"  /></a>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Footer;