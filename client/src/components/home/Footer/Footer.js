import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
// import { paymentCard } from "../../../assets/images";
// import Image from "../../designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const emailValidation = () => {
    return String(emailInfo)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSubscription = () => {
    if (emailInfo === "") {
      setErrMsg("Please provide an Email !");
    } else if (!emailValidation(emailInfo)) {
      setErrMsg("Please give a valid Email!");
    } else {
      setSubscription(true);
      setErrMsg("");
      setEmailInfo("");
    }
  };
  return (
    <div className="w-full bg-slate-800 text-white py-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
        <div className="col-span-2">
          <FooterListTitle title=" More about Le Stylist" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
              ab ullam, numquam nesciunt in.
            </p>
            <ul className="flex items-center gap-2">
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-white text-slate-800 hover:text-[#d1cf6d] cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-slate-800 duration-300 hover:border-[#d1cf6d] hover:border-2">
                  <FaYoutube />
                </li>
              </a>
              <a
                href="https://github.com/HibaKhalid2504"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-white text-slate-800 hover:text-[#d1cf6d] cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-slate-800 duration-300 hover:border-[#d1cf6d] hover:border-2">
                  <FaGithub />
                </li>
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-white text-slate-800 hover:text-[#d1cf6d] cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-slate-800 duration-300 hover:border-[#d1cf6d] hover:border-2">
                  <FaFacebook />
                </li>
              </a>
              <a
                href="https://www.linkedin.com/in/hiba-k-91a6611ba/"
                target="_blank"
                rel="noreferrer"
              >
                <li className="w-7 h-7 bg-white text-slate-800 hover:text-[#d1cf6d] cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-slate-800 duration-300 hover:border-[#d1cf6d] hover:border-2">
                  <FaLinkedin />
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div>
          <FooterListTitle title="Shop" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Accesories
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Clothes
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Electronics
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Home appliances
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              New Arrivals
            </li>
          </ul>
        </div>
        <div>
          <FooterListTitle title="Your account" />
          <ul className="flex flex-col gap-2">
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Profile
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Orders
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Addresses
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Account Details
            </li>
            <li className="font-titleFont text-base text-white-200 hover:text-[#d1cf6d] hover:underline decoration-[1px] decoration-[#d1cf6d] underline-offset-2 cursor-pointer duration-300">
              Payment Options
            </li>
          </ul>
        </div>
        <div className="col-span-2 flex flex-col items-center w-full px-4">
          <FooterListTitle title="Want to know about deals earlier than others?" />
          <div className="w-full">
            <p className="text-center mb-4">
              Enter your email to subscribe!
            </p>
            {subscription ? (
              <motion.p
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
              >
                Subscribed Successfully !
              </motion.p>
            ) : (
              <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                <div className="flex flex-col w-full">
                  <input
                    onChange={(e) => setEmailInfo(e.target.value)}
                    value={emailInfo}
                    className="w-full h-12 border-b border-[#d1cf6d] bg-transparent px-4 text-white text-lg placeholder:text-base outline-none"
                    type="text"
                    placeholder="Enter your email here..."
                  />
                  {errMsg && (
                    <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                      {errMsg}
                    </p>
                  )}
                </div>
                <button
                  onClick={handleSubscription}
                  className="bg-white text-slate-800 font-bold w-[34%] h-10 hover:bg-[#d1cf6d] hover:text-black hover:font-bold duration-300 text-base tracking-wide"
                >
                  Subscribe
                </button>
              </div>
            )}

            {/* <Image
              className={`w-[80%] lg:w-[60%] mx-auto ${
                subscription ? "mt-2" : "mt-6"
              }`}
              imgSrc={paymentCard}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
