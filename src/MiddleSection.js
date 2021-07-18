import React, { useState } from "react";
import * as styles from "./MiddleSection.module.scss";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { motion } from "framer-motion";

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: "white",
        borderRadius: "15px !important",
        height: 45,
        width: 200,
      },
      notchedOutline: {
        border: "none",
      },
    },
    MuiSvgIcon: {
      root: {
        fill: "#B0ADAD",
      },
    },
  },
});

const MiddleSection = () => {
  const [selectedCategoryID, setSelectedCategoryID] = useState(0);

  const categories = [
    {
      name: "Burger",
      iconPath: "/icons/burger.svg",
    },
    {
      name: "Pizza",
      iconPath: "/icons/pizza.svg",
    },
    {
      name: "Ice Cream",
      iconPath: "/icons/ice-cream.svg",
    },
    {
      name: "Snack",
      iconPath: "/icons/french-fries.svg",
    },
    {
      name: "Drink",
      iconPath: "/icons/drink.svg",
    },
  ];

  const burgers = [
    {
      name: "Beef Burger",
      time: "20Min",
      distance: "2.2Km",
      price: "$35.00",
    },
    {
      name: "Cheese Burger",
      time: "20Min",
      distance: "2.5Km",
      price: "$30.00",
    },
    {
      name: "Chicken Burger",
      time: "20Min",
      distance: "2.5Km",
      price: "$29.00",
    },
    {
      name: "Black Burger",
      time: "20Min",
      distance: "2.5Km",
      price: "$30.00",
    },
  ];

  const ease = [0.6, 0.01, -0.05, 0.9];

  const container = {
    hidden: { x: -100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 1,
        ease: ease,
      },
    },
  };

  const item = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 1 } },
  };

  const renderHeaderSection = () => {
    return (
      <motion.div className={styles.headerSection} variants={item}>
        <div className={styles.messages}>
          <div className={styles.firstMessage}>Welcome</div>
          <div className={styles.secondMessage}>Let's Order Your Food</div>
        </div>
        <div className={styles.headerSectionRightSide}>
          <div>
            <OutlinedInput
              id="outlined-adornment-search"
              onChange={(val) => console.log(val)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchRoundedIcon />
                </InputAdornment>
              }
              placeholder="Search"
            />
          </div>
          <div className={styles.notifications}>
            <NotificationsNoneRoundedIcon />
            <div className={styles.notificationsIndicator}></div>
          </div>
          <div
            className={styles.profileImage}
            style={{ backgroundImage: "url(/images/unsplashprofile.jpg)" }}
          ></div>
        </div>
      </motion.div>
    );
  };

  const renderPromotionSection = () => {
    return (
      <motion.div className={styles.promotionSectionContainer} variants={item}>
        <div className={styles.promotionTextContainer}>
          <div className={styles.promotionTextInnerContainer}>
            <div className={styles.promotionText}>
              Order Food and Get <br /> Discounts Up To
            </div>
            <div className={styles.promotionDiscount}>50% Off</div>
          </div>
        </div>
        <div
          className={styles.deliveryParcelImage}
          style={{ backgroundImage: "url(/images/delivery-parcel.png)" }}
        ></div>
      </motion.div>
    );
  };

  const renderCategorySection = () => {
    return (
      <motion.div className={styles.categoryContainer} variants={item}>
        <div className={styles.categoryHeader}>Category</div>
        <div className={styles.categoryOptionsCotainer}>
          {categories.map((element, index) => {
            return (
              <div
                className={`${styles.categoryOptionContainer} ${
                  index === selectedCategoryID
                    ? styles.categoryOptionSelected
                    : ""
                }`}
                key={index}
                onClick={() => setSelectedCategoryID(index)}
              >
                <div
                  className={styles.categoryImage}
                  style={{ backgroundImage: `url(${element.iconPath})` }}
                ></div>
                <div>{element.name}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  const renderMenuSection = () => {
    return (
      <motion.div className={styles.menuSectionContainer} variants={item}>
        <div className={styles.menuSectionTitle}>
          <div className={styles.leftSideContainer}>
            <div
              className={styles.fireImage}
              style={{ backgroundImage: "url(/icons/fire.svg)" }}
            ></div>
            <div>Popular Menu</div>
          </div>
          <div className={styles.seeAllButton}>See All</div>
        </div>
        <div className={styles.menuOptionsContainer}>
          {burgers.map((element, index) => {
            return (
              <div
                className={styles.menuOptionContainer}
                key={index}
                onClick={() => console.log(`selected ${element}`)}
              >
                <div
                  className={styles.fireImage}
                  style={{ backgroundImage: "url(/icons/fire.svg)" }}
                ></div>
                <div
                  className={styles.burgerImage}
                  style={{ backgroundImage: "url(/icons/burger.svg)" }}
                ></div>
                <div className={styles.dishName}>{element.name}</div>
                <div className={styles.additionalDetailsContainer}>
                  <div>{element.time}</div>
                  <div className={styles.orangeSeparator}></div>
                  <div>{element.distance}</div>
                </div>
                <div className={styles.priceContainer}>{element.price}</div>
              </div>
            );
          })}
        </div>
      </motion.div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <motion.div
        className={styles.container}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {renderHeaderSection()}
        {renderPromotionSection()}
        {renderCategorySection()}
        {renderMenuSection()}
      </motion.div>
    </ThemeProvider>
  );
};

export default MiddleSection;
