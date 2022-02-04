import * as React from "react";
import { MotionListProps } from "~/types/components";
import { motion } from "framer-motion";

const MotionList: React.FC<MotionListProps> = ({ skill }) => {
  return (
    <motion.li drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={1}>
      {skill}
    </motion.li>
  );
};

export default MotionList;
