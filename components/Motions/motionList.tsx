import * as React from "react";
import { MotionListProps } from "~/types/components";
import { motion } from "framer-motion";

interface Props extends MotionListProps {
  className?: string;
}

const MotionList: React.FC<Props> = ({ skill, className }) => {
  return (
    <motion.li className={className} drag dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }} dragElastic={1}>
      {skill}
    </motion.li>
  );
};

export default MotionList;
