"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const displayVariants = {
  initial: {
    opacity: 0,
    display: "none",
  },
  animate: {
    display: "flex",
    opacity: 1,
    scale: 1.08,
    transition: {
      delay: 0.3,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const BlogLink = () => {
  const [show, setShow] = React.useState(false);
  const [isActive, setIsActive] = React.useState(0);
  const timeoutRef = useRef(null);

  const handleGroupActive = (id) => {
    // Clear the current timeout if there is one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setIsActive(id);
    timeoutRef.current = setTimeout(() => {
      setIsActive(0);
    }, 8000); // revert back to initial state after 2 seconds
  };

  const links = [
    {
      id: 1,
      name: "Don’t Be a Victim: Protecting Yourself Against Social Engineering",
      url: "https://bolexzy.hashnode.dev/dont-be-a-victim-protecting-yourself-against-social-engineering",
      icon: "/images/blog1.png",
    },
    {
      id: 2,
      name: "Level up your GitHub profile in minutes",
      url: "https://medium.com/@bolexzy/level-up-your-github-profile-in-minutes-5c798d38862a",
      icon: "/images/blog2.png",
    },
    {
      id: 3,
      name: "Announcing QuizWhiz 1.0 🎉: Building an Engaging Quiz Platform",
      url: "https://bolexzy.hashnode.dev/announcing-quizwhiz-10-building-an-engaging-quiz-platform",
      icon: "/images/blog3.png",
    },
    {
      id: 4,
      name: "What happens when you type “www.google.com” in your browser and press Enter.",
      url: "https://bolexzy.hashnode.dev/what-happens-when-you-type-wwwgooglecom-in-your-browser-and-press-enter",
      icon: "/images/blog4.png",
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
          className="w-[350px] h-[120px] md:w-[450px] lg:w-[550px] p-2 flex items-end rounded-xl bg-light-gradient group border-white active:border-2 hover:border-2"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(197, 199, 201, 0.18) -11.67%, #313435 108.33%, rgba(158, 159, 161, 0.25) 259.83%), url(${link.icon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
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
          onTap={() => handleGroupActive(link.id)}
          key={link.id}
        >
          <div className="flex items-center justify-between w-full  text-primary-content focus:bg-slate-300">
            <Link
              href={link.url}
              target="_blank"
              className="underline underline-offset-2 decoration-slate-500 p-2  truncate"
            >
              <p className="text-sm text-white font-medium truncate max-w-2/5">
                {link.name}
              </p>
            </Link>
            {/* copy svg icon */}
            <Link
              href={link.url}
              target="_blank"
              className="btn btn-sm bg-transparent border-none  text-white self-end hover:bg-transparent px-2"
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
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default BlogLink;
