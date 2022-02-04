import * as React from "react";
import { MotionHyperlinkProps } from "~/types/components";
import { motion } from "framer-motion";

const MotionHyperlink: React.FC<MotionHyperlinkProps> = ({ background, href, icon, text }) => {
  return (
    <motion.a
      style={{ background: `${background}` }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.9 }}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      {icon}
      {text}
    </motion.a>
  );
};

export default MotionHyperlink;
