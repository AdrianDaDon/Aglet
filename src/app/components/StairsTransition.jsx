import { AnimatePresence, motion } from "framer-motion";
import { useLocation, Routes } from "react-router-dom";
import Strairs from "./Stairs";

export default function StairsTransition({ children }) {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          className="stair-transition"
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          exit={{ opacity: 0 }}
        >
          <Strairs />
        </motion.div>
      </AnimatePresence>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1.4,
            duration: 0.3,
            ease: "easeOut",
          },
        }}
      >
        <Routes location={location}>{children}</Routes>
      </motion.div>
    </>
  );
}
