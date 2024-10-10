import React from "react";
import { motion } from "framer-motion";

const ContinentLayout = ({ backgroundColor, children }) => {
  return (
    <div className={`min-h-screen ${backgroundColor}`}>
      <motion.div
        className="pt-16 px-4" // Add padding-top to account for the navbar
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default ContinentLayout;
