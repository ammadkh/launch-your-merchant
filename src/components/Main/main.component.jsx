import React, { Fragment } from "react";
import Grid from "@mui/material/Grid";
import hoodieAd from "../../assets/girlpic.PNG";
import classes from "./main.module.css";
import { motion } from "framer-motion";

export default function MainComponent() {
  return (
    <Fragment>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={2}
        className={classes.mainContainer}
      >
        <Grid item xs={12} md={5}>
          <motion.span c className={classes.title}>
            Helping creators launch their own merch
          </motion.span>
          <motion.p
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
          >
            Merchpals makes it easy to create a merch store your community will
            love
          </motion.p>
        </Grid>
        <Grid item xs={12} md={7}>
          <motion.div
            className={classes.image}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img
              src={hoodieAd}
              alt=""
              width="100%"
              style={{ objectFit: "cover" }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Fragment>
  );
}
