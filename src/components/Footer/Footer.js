import React from "react";
import logo from "../../resources/iquadra.png"
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaArrowUp } from 'react-icons/fa';




const Footer=()=>{
    return(
        <div>
            <footer className="footer bg-[#043d5d] rounded shadow p-5">
                <div className="outerDiv p-4 "> 
                    <div className="innerDiv sm:flex sm:items-center sm:justify-between">
                        <a className="logo flex items-center mb-4 sm:mb-0" href="https://iquadra.com/" target="_blank">
                            <img src={logo} alt="Logo" className="logo h-12 mr-3 mb-4 rounded"/>
                            <span className="companyName font-sans font-bold text-blue-300 text-3xl mb-6 ">iQuadra Information Services</span>
                        </a>
                        <ul className="socialMedias flex flex-wrap items-center mb-4 text-sm font-medium">
                            <li>
                                <a href="http://twitter.com/IquadraISLLC" className="mr-12 hover:opacity-50 flex items-center mt-4" target="_blank">
                                <FaTwitter className="twitterLogo fill-white" size="2em"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/iQuadraInformationServices/" className="mr-12 hover:opacity-50 flex items-center mt-4" target="_blank">
                                <FaFacebookF className="facebookLogo fill-white" size="2em"/>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/iquadra/mycompany/" className="mr-12 hover:opacity-50 flex items-center mt-4" target="_blank">
                                <FaLinkedinIn className="linkedinLogo fill-white" size="2em"/>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="mr-12 hover:opacity-50 flex items-center mt-4">
                                <FaArrowUp className="backToTop fill-white" size="2em"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className="breakline my-6 border-gray-200" />
                    <span className="copyrightInfo block text-sm text-gray-500 text-white">© Copyright 2023 by <a href="https://iquadra.com/" className="hover:underline hover:text-blue-300">iQuadra</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </div>
    );
};

export default Footer;