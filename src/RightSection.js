import React from "react";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as styles from "./RightSection.module.scss";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import { motion } from "framer-motion";

const RightSection = () => {
  const ease = [0.6, 0.01, -0.05, 0.9];

  const container = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 2,
        ease: ease,
      },
    },
  };

  const item = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const renderTopSection = () => {
    return (
      <motion.div className={styles.topSectionContainer} variants={item}>
        <div className={styles.heartContainer}>
          <FavoriteIcon style={{ fill: "red", fontSize: 14 }} />
        </div>
        <div
          className={styles.burgerImage}
          style={{ backgroundImage: "url(/icons/burger.svg)" }}
        ></div>
        <div className={styles.titleAndPriceContainer}>
          <div>Beef Burger</div>
          <div>$30.00</div>
        </div>
        <div className={styles.additionalDetailsContainer}>
          <div>20Min</div>
          <div className={styles.orangeSeparator}></div>
          <div>2.5Km</div>
        </div>
        <div className={styles.moreInfoContainer}>
          <div className={styles.singleInfoContainer}>
            <StarIcon className={styles.infoIcon} />
            <div>4.5k</div>
          </div>
          <div className={styles.singleInfoContainer}>
            <WatchLaterIcon className={styles.infoIcon} />
            <div>20Min</div>
          </div>
          <div className={styles.singleInfoContainer}>
            <div
              className={styles.fireImage}
              style={{ backgroundImage: "url(/icons/fire.svg)" }}
            ></div>
            <div>30kcal</div>
          </div>
        </div>
        <div className={styles.description}>
          A cheeseburger is a hamburger topped with cheese. Traditionally, the
          slice of cheese is placed on top of the meat patty.
        </div>
        <Button
          variant="contained"
          color="primary"
          className={styles.addToCartButtonMaterial}
        >
          Add to Cart
        </Button>
      </motion.div>
    );
  };

  const renderBottomSection = () => {
    return (
      <motion.div className={styles.bottomSectionContainer} variants={item}>
        <div
          className={styles.scooterImage}
          style={{ backgroundImage: "url(/images/delivery-scooter.png)" }}
        ></div>
        <div className={styles.subscribeTitle}>
          Faster Delivery and Get Free <br /> Shipping If You Subscribe
        </div>
        {/* <div>enter your email</div> */}
        <div>
          <OutlinedInput
            id="outlined-adornment-email"
            onChange={(val) => console.log(val)}
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.subscribeButtonMaterial}
                >
                  Subscribe
                </Button>
              </InputAdornment>
            }
            placeholder="Enter your Email"
            className={styles.emailInputContainer}
          />
        </div>
      </motion.div>
    );
  };

  return (
    <motion.div
      className={styles.container}
      variants={container}
      initial="hidden"
      animate="show"
    >
      {renderTopSection()}
      {renderBottomSection()}
    </motion.div>
  );
};

export default RightSection;
