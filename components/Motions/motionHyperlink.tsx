import * as React from "react";
import { MotionHyperlinkProps } from "~/types/components";
import { motion } from "framer-motion";

interface Props extends MotionHyperlinkProps {
  className: string;
}

const MotionHyperlink: React.FC<Props> = ({ background, href, icon, text, className }) => {
  return (
    <motion.a style={{ background: `${background}` }} whileHover={{ y: -6 }} whileTap={{ scale: 0.9 }} href={href} target="_blank" rel="noreferrer noopener" className={className}>
      {icon}
      {text}
    </motion.a>
  );
};

export default MotionHyperlink;
