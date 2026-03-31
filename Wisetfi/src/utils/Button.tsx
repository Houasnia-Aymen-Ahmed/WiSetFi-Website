import React from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  styles: string;
}

const Button: React.FC<ButtonProps> = ({
  styles
}) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(51, 187, 207)" }}
    whileTap={{ scale: 0.95 }}
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} transition-all duration-300`}
  >
    Get Started
  </motion.button>
);

export default Button;
