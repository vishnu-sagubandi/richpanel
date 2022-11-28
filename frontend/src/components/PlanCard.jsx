import React from "react";
import Button from "@mui/material/Button";

import styles from "../styles/card.module.css";

function PlanCard(props) {
  return (
    <div className={styles.bg}>
      <div className={styles.cardContainer}>
        <div className={styles.header}>
          <div className={styles.leftHeader}>
            <h2 className={styles.heading}>Current Plan Details</h2>
            <span
              className={
                props.plan === "Active" ? styles.active : styles.cancel
              }
            >
              {props.plan}
            </span>
          </div>
          {props.plan === "Active" ? (
            <Button
              variant="text"
              size="large"
              sx={{
                fontSize: "1.2rem",
                fontWeight: "bold",
              }}
            >
              Cancel
            </Button>
          ) : null}
        </div>
        <div className={styles.body}>
          <h2 className={styles.planType}>Basic</h2>
          <p className={styles.devices}>Phone+Tablet</p>
          <div>
            <p className={styles.planCost}>₹ 2,000</p>
            <span className={styles.planDuration}>/yr</span>
          </div>
          <Button
            variant="outlined"
            size="md"
            sx={{
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            {props.plan === "Active" ? "Change Plan" : "Choose Plan"}
          </Button>
        </div>
        <div className={styles.message}>
          {props.plan === "Active"
            ? "Your Subscription has Started on Jul 11th, 2022 and will auto renew on Jul 12th, 2023."
            : "Your Subscription was cancelled and you will loose access to services on Jul 11th, 2023"}
        </div>
      </div>
    </div>
  );
}

export default PlanCard;
