"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const displayVariants = {
  initial: {
    opacity: 0,
    display: "none",
  },
  animate: {
    display: "flex",
    opacity: 1,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const Links = () => {
  const [show, setShow] = React.useState(false);

  const links = [
    {
      id: 1,
      name: "GitHub",
      url: "https://github.com/Bolexzy",
      icon: "/images/github.svg",
      summary: "I have a lot of projects on my github :)",
    },
    {
      id: 1,
      name: "LinkedIn",
      url: "www.linkedin.com/in/boluwatifeo",
      icon: "/images/linkedin.svg",
      summary:
        "Connect with me on LinkedIn, where I engage with the professional community and share insights about my work.",
    },
    {
      id: 1,
      name: "Twitter",
      url: "https://twitter.com/Bolexzyy__",
      icon: "/images/twitter.svg",
      summary: "Tweeting my way through the code jungle!",
    },
    {
      id: 1,
      name: "SimpleFolio",
      url: "https://simplefolio-nine.vercel.app/",
      icon: "/images/website.svg",
      summary:
        "Showcasing my digital creations one project at a time. simple style.",
    },
  ];

  const handleClick = (e, url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        setShow(true);
        setTimeout(() => {
          setShow(false); // this will run after 3 seconds
        }, 3000);
      })
      .catch(() => {
        console.log("something went wrong");
      });
  };
  return (
    <div className="w-full flex flex-col items-center justify-center gap-5">
      <div className={`toast toast-top toast-end ${show ? "flex" : "hidden"}`}>
        <div className="alert alert-info">
          <span>Copied Link.</span>
        </div>
      </div>
      {links.map((link) => (
        <motion.div
          className="w-[350px] md:w-[450px] lg:w-[550px] p-2 rounded-xl bg-gray-400"
          initial={{
            opacity: 0,
            y: 100,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              delay: 0.3,
              duration: 4,
              ease: "easeInOut",
              bounce: 0.5,
            },
          }}
          whileHover="animate"
          whileTap="animate"
          key={link.id}
        >
          <div className="flex items-center justify-between  text-primary-content focus:bg-slate-300">
            {/* icon */}
            <a href={link.url} target="_blank" className="w-8">
              <Image
                width={50}
                height={50}
                alt="link image"
                src={link.icon}
                className="w-full h-full"
              />
            </a>

            <p className="text-lg text-black/75 font-medium">{link.name}</p>
            {/* copy svg icon */}
            <button
              className="btn btn-sm bg-transparent border-none  text-white hover:bg-transparent"
              onClick={(e) => handleClick(e, link.url)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
                />
              </svg>
            </button>
          </div>
          <motion.div
            className="w-full opacity-0 hidden items-center justify-center mt-4 text-center text-primary-content"
            variants={displayVariants}
          >
            <p className="text-gray-600">{link.summary}</p>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Links;
