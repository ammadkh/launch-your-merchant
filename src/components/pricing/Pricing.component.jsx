import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import freess from "../..//assets/freess.PNG";
import classes from "./Pricing.component.module.css";
import { motion } from "framer-motion";

export default function PricingComponent() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Grid item xs={12} className={classes.wrapper}>
      <span className={classes.title}>Pricing for Creators</span>
      <p>No monthly fees. No upfront costs. We only make money when you do.</p>
      <div className={classes.amountWrapper}>
        <span className={classes.dollars}>$</span>
        <span className={classes.zero}>0</span>
        <span className={classes.usd}>USD</span>
        <span className={classes.month}>/mo</span>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        style={{
          marginTop: "1rem",
        }}
      >
        <Button className={classes.btnFree} variant="contained">
          Start for free
        </Button>
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 1, type: "spring" }}
        className={classes.accrdWrapper}
      >
        <Accordion
          className={classes.accord}
          expanded={expanded}
          onChange={() => setExpanded((prev) => !prev)}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography className={classes.dropdownSt}>
              How is it free?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              When you get a order, that money is used to produce and ship out
              the product.So you have never have to pay for anything.
            </Typography>
            <div className={classes.imgWrapper}>
              <img
                src={freess}
                alt=""
                width="100%"
                className={classes.banner}
              />
            </div>
          </AccordionDetails>
        </Accordion>
      </motion.div>
    </Grid>
  );
}
