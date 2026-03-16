import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  // get the current pathname
  const location = useLocation();
  const pathname = location.pathname;


  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: {
              delay: 1,
              duration: 0.4,
              ease: "easeInOut",
            },
          }}
          className="page-transition"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
