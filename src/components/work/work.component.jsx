import React from "react";
import Grid from "@mui/material/Grid";
import classes from "./work.component.module.css";
import { motion } from "framer-motion";

export default function WorkComponent() {
  return (
    <Grid item xs={12} className={classes.wrapper}>
      <span className={classes.title}>How it works</span>
      <div className={classes.boxWrapper}>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, type: "spring" }}
          className={classes.boxContainer}
        >
          <div className={classes.integers}>1</div>
          <div className={classes.header}>Sign Up</div>
          <div
            style={{
              padding: "35px",
            }}
          >
            Upload your design and sign up at merchpal.com
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, type: "spring" }}
          className={classes.boxContainer}
        >
          <div className={classes.integers}>2</div>
          <div className={classes.header}>Customize</div>
          <div
            style={{
              padding: "35px",
            }}
          >
            Add more products and customize your store
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, type: "spring" }}
          className={classes.boxContainer}
        >
          <div className={classes.integers}>3</div>
          <div className={classes.header}>Promote</div>
          <div
            style={{
              padding: "35px",
            }}
          >
            Tell your community about your merch and encourage them to buy!
          </div>
        </motion.div>
      </div>
    </Grid>
  );
}
