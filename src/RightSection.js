import React from "react";
import StarIcon from "@material-ui/icons/Star";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as styles from "./RightSection.module.scss";
import Button from "@material-ui/core/Button";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputAdornment from "@material-ui/core/InputAdornment";

const RightSection = () => {
  const renderTopSection = () => {
    return (
      <div className={styles.topSectionContainer}>
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
      </div>
    );
  };

  const renderBottomSection = () => {
    return (
      <div className={styles.bottomSectionContainer}>
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
      </div>
    );
  };

  return (
    <div className={styles.container}>
      {renderTopSection()}
      {renderBottomSection()}
    </div>
  );
};

export default RightSection;
