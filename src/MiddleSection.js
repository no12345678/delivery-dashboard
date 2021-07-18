import React, { useState } from "react";
import * as styles from "./MiddleSection.module.scss";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";
import NotificationsNoneRoundedIcon from "@material-ui/icons/NotificationsNoneRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createTheme({
  overrides: {
    MuiOutlinedInput: {
      root: {
        backgroundColor: "white",
        borderRadius: '15px !important',
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

  const renderHeaderSection = () => {
    return (
      <div className={styles.headerSection}>
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
      </div>
    );
  };

  const renderPromotionSection = () => {
    return (
      <div className={styles.promotionSectionContainer}>
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
      </div>
    );
  };

  const renderCategorySection = () => {
    return (
      <div className={styles.categoryContainer}>
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
      </div>
    );
  };

  const renderMenuSection = () => {
    return (
      <div className={styles.menuSectionContainer}>
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
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.container}>
        {renderHeaderSection()}
        {renderPromotionSection()}
        {renderCategorySection()}
        {renderMenuSection()}
      </div>
    </ThemeProvider>
  );
};

export default MiddleSection;
