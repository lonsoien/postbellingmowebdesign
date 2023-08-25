import React, { useEffect } from "react";
import { motion } from "framer-motion"; 


const banner = {
    animate: {
      transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
      },
    },
  };
  
const letterAni = {
    initial: { y: 400 },
    animate: { y: 0,
    transition: {
    ease: [0.6, 0.01, -0.05, 0.95],
    duration: 1,
    },
  },
};
  
  const Banner = () => {
    useEffect(() => {
      setTimeout(() => {
      }, 2000);
    }, );
    return (
      <motion.div className='banner' variants={banner}>
        <BannerRowTop title={"BELLINGMO"} />
        <BannerRowBottom title={"WEBDESIGN"} />
      </motion.div>
    );
  };
  
  const AnimatedLetters = ({ title, disabled }) => (
    <motion.span
      className='row-title'
      variants={disabled ? null : banner}
      initial='initial'
      animate='animate'>
      {[...title].map((letter) => (
        <motion.span
          className='row-letter'
          variants={disabled ? null : letterAni}>
          {letter}
        </motion.span>
      ))}
    </motion.span>
  );
  
  const BannerRowTop = ({ title }) => {
    return (
      <div className={"banner-row"}>
        <div className='row-col'>
          <AnimatedLetters title={title} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 1, delay: 0.4,}}
          className='row-col'>
          <span className='row-message'> 
            Browse through the Webdesigns and send a request to buy your website today! 
            <a href="/digitalproducts" style={{color: "black", textDecoration: "underline"}}>
             <br/> Take a look</a> 
          </span>
        </motion.div>
      </div>
    );
  };
  
  const BannerRowBottom = ({ title }) => {
    return (
      <div className={"banner-row center"}>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
          className='scroll'>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}>
            In need
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              ease: "easeInOut",
              duration: 1,
              delay: 1.8,
            }}>
            for a website?
          </motion.span>
        </motion.div>
        <AnimatedLetters title={title} />
      </div>
    );
  };
  

  
  export default Banner;