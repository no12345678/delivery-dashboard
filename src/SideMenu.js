import React, { useState } from "react";
import * as styles from "./SideMenu.module.scss";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import ChatIcon from "@material-ui/icons/Chat";
import CreditCardOutlinedIcon from "@material-ui/icons/CreditCardOutlined";
import CreditCardTwoToneIcon from "@material-ui/icons/CreditCardTwoTone";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const SideMenu = () => {
  const icons = {
    HomeIcon: HomeIcon,
    HomeOutlinedIcon: HomeOutlinedIcon,
    FavoriteIcon: FavoriteIcon,
    FavoriteBorderOutlinedIcon: FavoriteBorderOutlinedIcon,
    ShoppingCartIcon: ShoppingCartIcon,
    ShoppingCartOutlinedIcon: ShoppingCartOutlinedIcon,
    ChatIcon: ChatIcon,
    ChatOutlinedIcon: ChatOutlinedIcon,
    CreditCardTwoToneIcon: CreditCardTwoToneIcon,
    CreditCardOutlinedIcon: CreditCardOutlinedIcon,
  };
  const [selectedIconIndex, setSelectedIconIndex] = useState(0);

  const sideMenuIcons = [
    {
      outlinedIcon: "HomeOutlinedIcon",
      filledIcon: "HomeIcon",
    },
    {
      outlinedIcon: "FavoriteBorderOutlinedIcon",
      filledIcon: "FavoriteIcon",
    },
    {
      outlinedIcon: "ShoppingCartOutlinedIcon",
      filledIcon: "ShoppingCartIcon",
    },
    {
      outlinedIcon: "ChatOutlinedIcon",
      filledIcon: "ChatIcon",
    },
    {
      outlinedIcon: "CreditCardOutlinedIcon",
      filledIcon: "CreditCardTwoToneIcon",
    },
  ];

  const renderIcon = (index, isSelected) => {
    const iconName = isSelected
      ? sideMenuIcons[index].filledIcon
      : sideMenuIcons[index].outlinedIcon;
    const SelectedIcon = icons[iconName];
    return <SelectedIcon />;
  };

  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <div
          className={styles.logoImage}
          style={{ backgroundImage: "url(/icons/dish.svg)" }}
        ></div>
      </div>
      <div className={styles.sideMenuActionsContainer}>
        {sideMenuIcons.map((element, index) => {
          return (
            <div
              className={styles.sideMenuActionContainer}
              key={index}
              onClick={() => setSelectedIconIndex(index)}
            >
              <div className={styles.sideMenuActionIcon}>
                {renderIcon(index, selectedIconIndex === index)}
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.logoutSection}>
        <hr style={{ width: "65%", marginBottom: 5 }} />
        <div
          className={styles.sideMenuActionContainer}
          onClick={() => console.log("logout")}
        >
          <div className={styles.sideMenuActionIcon}>
            <ExitToAppIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
