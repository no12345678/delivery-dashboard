import "./App.css";
import SideMenu from "./SideMenu";
import MiddleSection from "./MiddleSection";
import RightSection from "./RightSection";
import { motion } from "framer-motion";

function App() {
  const ease = [0.6, 0.01, -0.05, 0.9];

  const container = {
    hidden: { y: -100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        ease: ease,
      },
    },
  };

  const item = {
    hidden: { y: -100, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="App"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.div className="SideMenuContainer" variants={item}>
        <SideMenu />
      </motion.div>
      <motion.div className="middleSection" variants={item}>
        <MiddleSection />
      </motion.div>
      <motion.div className="rightSection" variants={item}>
        <RightSection />
      </motion.div>
    </motion.div>
  );
}

export default App;
