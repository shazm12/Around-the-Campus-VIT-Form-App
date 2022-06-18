import React from "react";
import  { motion } from 'framer-motion';

function CodeIcon() {
  
  const svgVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: { duration : 1}
    }
  }

  const pathVariants1 = {
    hidden: {
      x: 0,
      pathLength: 0,
    },
    visible: {
      pathLength: 0.5,
      x:5,
      transition: {
        duration: 3,
        ease: "easeInOut",
        yoyo: Infinity,
      }
    }
  }
  const pathVariants2 = {
    hidden: {
      x: 0,
      pathLength: 0,
    },
    visible: {
      x:5,
      pathLength: 1,
      transition: {
        delay:2,
        duration: 3,
        ease: "easeInOut",
        yoyo: Infinity,
      }
    }
  }
  const pathVariants3 = {
    hidden: {
      x: 0,
      pathLength: 0,
    },
    visible: {
      pathLength: 0.5,
      x:5,
      transition: {
        delay:3,
        duration: 3,
        ease: "easeInOut",
        yoyo: Infinity,
      }
    }
  }

  
  
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
      x="0"
      y="0"
      viewBox="0 0 48 48"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
    >
      <path fill="#444" d="M47 11V6a2 2 0 00-2-2H3a2 2 0 00-2 2v5h46z"></path>
      <path fill="#606060" d="M45 43H15V11h32v30a2 2 0 01-2 2z"></path>
      <circle cx="4.5" cy="7.5" r="1.5" fill="#E86C60"></circle>
      <circle cx="9.5" cy="7.5" r="1.5" fill="#EFD358"></circle>
      <circle cx="14.5" cy="7.5" r="1.5" fill="#72C472"></circle>
      <path fill="#4F4F4F" d="M16 43H3a2 2 0 01-2-2V11h15v32z"></path>
      <path fill="#B3B3B3" d="M5 14H12V16H5z"></path>
      <path fill="#B3B3B3" d="M5 20H10V22H5z"></path>
      <path fill="#B3B3B3" d="M5 26H12V28H5z"></path>
      <path fill="#B3B3B3" d="M5 32H10V34H5z"></path>
      <path fill="#B3B3B3" d="M5 38H12V40H5z"></path>
      <motion.path variants={pathVariants1}  fill="#E86C60" d="M20 14H25V16H20z"></motion.path>
      <motion.path variants={pathVariants2}  fill="#EFD358" d="M24 20H31V22H24z"></motion.path>
      <motion.path variants={pathVariants3}  fill="#FFF" d="M27 26H37V28H27z"></motion.path>
      <motion.path variants={pathVariants1}  fill="#EFD358" d="M24 32H31V34H24z"></motion.path>
      <motion.path variants={pathVariants2}  fill="#E86C60" d="M20 38H25V40H20z"></motion.path>
    </motion.svg>
  );
}

export default CodeIcon;