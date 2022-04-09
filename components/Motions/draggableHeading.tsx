import { motion } from "framer-motion";

interface DraggableHeadingProps {
  initialX: number;
  className: string;
  text: string;
}

export const DraggableH1 = ({ initialX, className, text }: DraggableHeadingProps) => {
  return (
    <motion.h1
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ delay: 0.2 }}
      variants={{
        initial: { opacity: 0, x: initialX },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 },
      }}
      className={className}
    >
      {text}
    </motion.h1>
  );
};

export const DraggableH2 = ({ initialX, className, text }: DraggableHeadingProps) => {
  return (
    <motion.h2
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={1}
      initial="initial"
      animate="enter"
      exit="exit"
      transition={{ delay: 0.2 }}
      variants={{
        initial: { opacity: 0, x: initialX },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 10 },
      }}
      className={className}
    >
      {text}
    </motion.h2>
  );
};
